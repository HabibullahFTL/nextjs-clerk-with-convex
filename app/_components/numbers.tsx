'use client';

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';

const Numbers = () => {
  const numbers = useQuery(api.numbers.getNumbers, { limit: 5 });
  return (
    <div className="">
      <h2 className="text-2x font-medium text-red-500">Client Side</h2>
      <pre>Numbers: {JSON.stringify(numbers, null, 2)}</pre>
    </div>
  );
};

export default Numbers;
