'use client';

import { api } from '@/convex/_generated/api';
import { Preloaded, usePreloadedQuery } from 'convex/react';

interface IProps {
  preloadedNumbers: Preloaded<typeof api.numbers.getNumbers>;
}

const PreloadedNumbers = ({ preloadedNumbers }: IProps) => {
  const preloadedNumbersList = usePreloadedQuery(preloadedNumbers);
  return (
    <div className="">
      <h2 className="text-2x font-medium text-green-500">Preloaded</h2>
      <pre>Numbers: {JSON.stringify(preloadedNumbersList, null, 2)}</pre>
    </div>
  );
};

export default PreloadedNumbers;
