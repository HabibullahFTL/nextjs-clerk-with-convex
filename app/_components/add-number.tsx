'use client';

import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';

const AddNumber = () => {
  const mutation = useMutation(api.numbers.addNumber);

  const handleAdd = () => {
    mutation({ number: Math.random() * 10 });
  };

  return (
    <button
      onClick={handleAdd}
      className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition cursor-pointer"
    >
      Add Number
    </button>
  );
};

export default AddNumber;
