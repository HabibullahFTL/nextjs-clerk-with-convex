import AddNumber from './_components/add-number';
import { ClientErrorBoundary } from './_components/client-error-boundary';
import Numbers from './_components/numbers';

export default async function Home() {
  return (
    <div className="">
      <AddNumber />
      <ClientErrorBoundary>
        <Numbers />
      </ClientErrorBoundary>
    </div>
  );
}
