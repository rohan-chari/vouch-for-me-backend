const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
module.exports = prisma;

/*
================= Prisma CLI Commands =================

▶ Initialize Prisma in your project:
npx prisma init

▶ Pull existing DB schema into Prisma models:
npx prisma db pull

▶ Push your Prisma schema to the database (no migrations):
npx prisma db push

▶ Create a migration (when changing the schema):
npx prisma migrate dev --name NAME_OF_MIGRATION

▶ View all applied migrations:
npx prisma migrate status

▶ Generate the Prisma client (must run after pull/push/migrate):
npx prisma generate

▶ Launch Prisma Studio (visual DB editor in browser):
npx prisma studio

▶ Reset your database and re-apply migrations (destructive):
npx prisma migrate reset

=======================================================
*/

/**
 * 📌 Prisma Migration Workflow — Add New Models Later
 * 1️⃣ Update schema.prisma
 * - Add new model(s) or modify existing ones
 * 2️⃣ Create a migration:
 * npx prisma migrate dev --name meaningful_migration_name
 * 3️⃣ Deploy the migration (for production or remote DBs):
 * npx prisma migrate deploy
 * Optional:
 * - Use `npx prisma studio` to view/edit data visually
 * - Use `npx prisma generate` if using the client in a custom path
 */

