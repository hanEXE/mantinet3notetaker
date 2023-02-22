import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const Alice = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@gmail.com",
    },
  });
}

main()
  .then(async () => {
    console.log("Done");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
