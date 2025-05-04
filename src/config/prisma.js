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
