import { PrismaClient } from "@prisma/client"

if(typeof global.prisma === 'undefined') {
  global.prisma = new PrismaClient();
}

const client = global.prisma

if(process.env.NODE_ENV !== 'production') global.prisma = client

export default client