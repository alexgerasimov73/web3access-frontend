import { createLazyFileRoute } from '@tanstack/react-router';
import { AuthenticatedGuard } from '../routing/guard/AuthenticatedGuard';

export const Route = createLazyFileRoute('/')({
  component: () => <AuthenticatedGuard />,
});
