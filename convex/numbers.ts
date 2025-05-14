import { v } from 'convex/values';
import { z } from 'zod';
import { mutation, query } from './_generated/server';

// convex/numbers.ts
export const getNumbers = query({
  args: { limit: v.number() },
  handler: async (ctx, args) => {
    const auth = await ctx.auth.getUserIdentity();

    if (!auth?.email) {
      return {
        error: 'You are not authenticated',
        numbers: [],
        user: null,
      };
    }

    const validationSchema = z.object({
      limit: z.number().min(5),
    });

    const zodValidationRes = validationSchema.safeParse(args);

    if (!zodValidationRes.success) {
      return {
        success: false,
        error: zodValidationRes.error?.issues?.map((item) => ({
          path: Array.isArray(item?.path)
            ? item?.path?.[item?.path?.length - 1]
            : item?.path,
          message: item?.message,
        })),
      };
    }

    const numbers = await ctx.db
      .query('numbers')
      .order('desc')
      .take(zodValidationRes.data.limit);

    return {
      numbers: numbers?.map((item) => Math.round(item?.number)),
      user: { email: auth?.email },
    };
  },
});

export const addNumber = mutation({
  args: { number: v.number() },
  handler: async (ctx, args) => {
    const auth = await ctx.auth.getUserIdentity();
    if (!auth?.email) {
      throw new Error('You are not authenticated');
    }

    const id = await ctx.db.insert('numbers', { number: args.number });
    return id;
  },
});
