'use client';

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';

const Numbers = () => {
  const result = useQuery(api.numbers.getNumbers, { limit: 5 });

  if (result === undefined) {
    return (
      <div className="p-4 rounded-md bg-yellow-50 text-yellow-800 border border-yellow-300">
        <p className="text-sm">Loading or unauthorized. Please sign in.</p>
      </div>
    );
  }

  if (result.error) {
    return (
      <div className="p-4 rounded-md bg-red-50 text-red-700 border border-red-300">
        <p className="font-semibold">Error:</p>
        <pre className="text-sm">{JSON.stringify(result.error, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-md bg-gray-100 space-y-2">
      <h2 className="text-xl font-semibold text-blue-600">Client Side</h2>
      <pre className="text-sm bg-white p-2 rounded border">
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
};

export default Numbers;
