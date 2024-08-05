import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    // const hot = await prisma.category.upsert({
    //     where: { name: 'Горячее' },
    //     update: {},
    //     create:{
    //         name: 'Горячее',
    //     }
    // });

}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });