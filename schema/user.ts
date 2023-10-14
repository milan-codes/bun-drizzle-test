import { serial, varchar, boolean, timestamp, pgTable } from 'drizzle-orm/pg-core';

export const user = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 254 }).unique(),
  emailVerified: boolean('email_verified').default(false),
  password: varchar('password', { length: 64 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
