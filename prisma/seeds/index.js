const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const users = await prisma.user.findMany();
    if (users.length > 0) return;
    const userCreates = await prisma.user.createMany({
        data: [
            {
                email: 'john@mail.com',
                password: 'changeme',
                name: 'Jhon',
                role: 'ADMIN',
                avatar: 'https://picsum.photos/id/1/200/300',
            },
            {
                email: 'maria@mail.com',
                password: '12345',
                name: 'Maria',
                role: 'USER',
                avatar: 'https://picsum.photos/id/1/200/300',
            },
            {
                email: 'admin@mail.com',
                password: 'admin123',
                name: 'Admin',
                role: 'USER',
                avatar: 'https://picsum.photos/id/1/200/300',
            },
            {
                email: 'manu@gmail.com',
                password: 'manu123',
                name: 'manu',
                role: 'USER',
                avatar: 'https://picsum.photos/id/1/200/300',
            },
            {
                email: 'shashikunal@gmail.com',
                password: 'shashi123',
                name: 'shashi',
                role: 'USER',
                avatar: 'https://picsum.photos/id/1/200/300',
            },
        ],
        skipDuplicates: true,
    });
    console.log(userCreates);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
