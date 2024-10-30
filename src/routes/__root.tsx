import { createRootRoute } from '@tanstack/react-router';
import { ConnectedWalletGuard } from '../routing/guard/ConnectedWalletGuard';
import { lazy, Suspense } from 'react';

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );

export const Route = createRootRoute({
  component: () => (
    <>
      <ConnectedWalletGuard />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
});
