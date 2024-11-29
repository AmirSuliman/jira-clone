import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import auth from '@/features/auth/server/route';
const app = new Hono().basePath('/api');

const routes = app.route('/auth', auth);
console.log(routes);
export const GET = handle(app);

export type AppType = typeof routes;
