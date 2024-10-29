import { createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ConnectedWalletGuard } from '../routing/guard/ConnectedWalletGuard';

export const Route = createRootRoute({
  component: () => (
    <>
      <ConnectedWalletGuard />
      <TanStackRouterDevtools />
    </>
  ),
});
