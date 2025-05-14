'use client';

import { ErrorBoundary } from 'react-error-boundary';

export function ClientErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div className="p-4 bg-red-100 text-red-700 rounded border">
          <p className="font-medium">Something went wrong:</p>
          <pre className="text-sm">{error.message}</pre>
          <button
            onClick={resetErrorBoundary}
            className="mt-2 px-4 py-1 bg-red-600 text-white rounded"
          >
            Retry
          </button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}
