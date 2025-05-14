import { api } from '@/convex/_generated/api';
import { fetchQuery } from 'convex/nextjs';
import AddNumber from '../_components/add-number';
import { getAuthToken } from '../auth';

const ServerPage = async () => {
  const token = await getAuthToken();
  const data = await fetchQuery(
    api.numbers.getNumbers,
    { limit: 5 },
    { token }
  );
  return (
    <div>
      <AddNumber />
      <h2 className="">
        Server Side Only (If you add number, you need to refresh to see updated
        content)
      </h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ServerPage;
