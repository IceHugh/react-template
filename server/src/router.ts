import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import type { Context } from './context';
import { createPrismaClient } from './db';

type User = {
	id: string;
	name: string;
	bio?: string;
};
const users: Record<string, User> = {};
export const t = initTRPC.context<Context>().create();
export const appRouter = t.router({
	getUserById: t.procedure.input(z.string()).query((opts) => {
		return users[opts.input]; // input type is string
	}),
	createUser: t.procedure
		// validate input with Zod
		.input(
			z.object({
				name: z.string().min(3),
				bio: z.string().max(142).optional(),
			}),
		)
		.mutation((opts) => {
			const _prisma = createPrismaClient();
			const id = Date.now().toString();
			const user: User = { id, ...opts.input };
			users[user.id] = user;
			return user;
		}),
});
// export type definition of API
export type AppRouter = typeof appRouter;
