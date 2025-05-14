import { getAuthToken } from '@/app/auth';
import { api } from '@/convex/_generated/api';
import { fetchQuery } from 'convex/nextjs';

export const GET = async () => {
  const limit = 5;

  try {
    const token = await getAuthToken();
    const data = await fetchQuery(api.numbers.getNumbers, { limit }, { token });

    return Response.json(data);
  } catch (error) {
    return Response.json(error);
  }
};
