import { drizzle } from 'drizzle-orm/postgres-js';
import { serial, varchar, boolean, timestamp, pgTable } from 'drizzle-orm/pg-core';
import postgres from 'postgres';
import { user } from './schema/user';

const client = postgres(process.env.DATABASE_URL!);
const db = drizzle(client, { schema: { user } });

await db.select().from(user);
