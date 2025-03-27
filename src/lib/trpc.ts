import { createTRPCContext } from '@trpc/tanstack-react-query';
import type { AppRouter as WorkerAppRouter } from '@worker/src/router';

export const { TRPCProvider, useTRPC, useTRPCClient } =
  createTRPCContext<WorkerAppRouter>();
export type AppRouter = WorkerAppRouter;
