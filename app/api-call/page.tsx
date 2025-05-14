'use client';
import { useEffect, useState } from 'react';
import AddNumber from '../_components/add-number';

interface IData {
  numbers: number[];
  user: {
    email: string;
  };
}

const APICallPage = () => {
  const [data, setData] = useState<IData | null>(null);

  useEffect(() => {
    fetch('/api/numbers')
      .then((res) => res.json())
      .then((res) => {
        console.log({ res });

        setData(() => res as unknown as IData);
      });
  }, []);

  return (
    <div>
      <AddNumber />
      <h2 className="">
        API call Only (If you add number, you need to refresh to see updated
        content)
      </h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default APICallPage;
