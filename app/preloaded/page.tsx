import { api } from '@/convex/_generated/api';
import { preloadQuery } from 'convex/nextjs';
import AddNumber from '../_components/add-number';
import PreloadedNumbers from '../_components/pre-loaded-numbers';
import { getAuthToken } from '../auth';

const Preloaded = async () => {
  const token = await getAuthToken();
  const preloaded = await preloadQuery(
    api.numbers.getNumbers,
    { limit: 5 },
    { token }
  );
  return (
    <div>
      <AddNumber />
      <PreloadedNumbers preloadedNumbers={preloaded} />
    </div>
  );
};

export default Preloaded;
