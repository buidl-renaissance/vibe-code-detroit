import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

// Example table - you can modify this based on your needs
export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

// Example table for posts/events
export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  content: text('content').notNull(),
  authorId: integer('author_id').references(() => users.id),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

// Email subscriptions table
export const emailSubscriptions = sqliteTable('email_subscriptions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
  subscribedAt: integer('subscribed_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  unsubscribedAt: integer('unsubscribed_at', { mode: 'timestamp' }),
});

// Export types for TypeScript
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
export type EmailSubscription = typeof emailSubscriptions.$inferSelect;
export type NewEmailSubscription = typeof emailSubscriptions.$inferInsert;
