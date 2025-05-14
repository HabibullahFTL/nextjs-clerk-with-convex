import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const getNumbers = query({
  args: { limit: v.number() },
  handler: async (ctx, args) => {
    const auth = await ctx.auth.getUserIdentity();
    if (!auth?.email) {
      throw new Error('You are not authenticated');
    }

    const numbers = await ctx.db
      .query('numbers')
      .order('desc')
      .take(args.limit);
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
