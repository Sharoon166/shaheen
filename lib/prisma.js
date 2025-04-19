import { PrismaClient } from '@prisma/client'

export const db = globalThis.prisma ?? new PrismaClient();

if (process.env.NODE_ENV === "production") {
    globalThis.prisma = db;
}

/**
 globalThis.prisma ensures that the PrismaClient instance is shared across hot reloads during development. This prevents unnecessary database connections and improves performance.
 */