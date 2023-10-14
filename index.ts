import { drizzle } from 'drizzle-orm/postgres-js';
import { serial, varchar, boolean, timestamp, pgTable } from 'drizzle-orm/pg-core';
import postgres from 'postgres';

const user = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 254 }).unique(),
  emailVerified: boolean('email_verified').default(false),
  password: varchar('password', { length: 64 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

const client = postgres(process.env.DATABASE_URL!);
const db = drizzle(client, { schema: { user } });

await db.select().from(user);
