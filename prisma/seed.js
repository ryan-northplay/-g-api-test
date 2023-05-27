const { PrismaClient } = require('@prisma/client');
const { users, balances, games, categories, products } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {

    await prisma.game.deleteMany();
    console.log('Deleted records in game table');

    await prisma.balance.deleteMany();
    console.log('Deleted records in balance table');

    await prisma.product.deleteMany();
    console.log('Deleted records in product table');

    await prisma.user.deleteMany();
    console.log('Deleted records in category table');

    await prisma.category.deleteMany();
    console.log('Deleted records in category table');

    await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
    console.log('reset product auto increment to 1');

    await prisma.$queryRaw`ALTER TABLE Balance AUTO_INCREMENT = 1`;
    console.log('reset balance auto increment to 1');

    await prisma.$queryRaw`ALTER TABLE Category AUTO_INCREMENT = 1`;
    console.log('reset category auto increment to 1');

    await prisma.category.createMany({
      data: categories,
    });
    console.log('Added category data');

    await prisma.game.createMany({
      data: games,
    });
    console.log('Added game data');

    await prisma.product.createMany({
      data: products,
    });
    console.log('Added product data');
    
    await prisma.balance.createMany({
      data: balances,
    });
    console.log('Added balances data');
    await prisma.user.createMany({
      data: users,
    });
    
    console.log('Added user data');

  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
