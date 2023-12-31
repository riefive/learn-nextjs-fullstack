import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import categoryRaws from './dummy.category.json';
import productRaws from './dummy.product.json';
import userRaws from './dummy.user.json';

const prisma = new PrismaClient();

async function initUser() {
    const users = await prisma.user.findMany();
    if (users.length > 0) return { count: users.length };
    try {
        const raws = userRaws;
        const data: any = [];
        for (const item of raws) {
            item.password = bcrypt.hashSync(item.password, 10);
            data.push(item);
        }
        const userCreates = await prisma.user.createMany({
            data,
            skipDuplicates: true,
        });
        return userCreates;
    } catch (error) {
        console.error(error);
        return { count: 0 };
    }
}

async function initCategory() {
    const categories = await prisma.category.findMany();
    if (categories.length > 0) return { count: categories.length };
    try {
        const raws: any = categoryRaws;
        const categoryCreates = await prisma.category.createMany({
            data: raws,
            skipDuplicates: true,
        });
        return categoryCreates;
    } catch (error) {
        console.error(error);
        return { count: 0 };
    }
}

async function initProduct() {
    const products = await prisma.product.findMany();
    if (products.length > 0) return { count: products.length };
    try {
        const raws: any = productRaws;
        const productCreates = await prisma.product.createMany({
            data: raws,
        });
        return productCreates;
    } catch (error) {
        console.error(error);
        return { count: 0 };
    }
}

async function main() {
    const userCreates = await initUser();
    const categoryCreates = await initCategory();
    const productCreates = await initProduct();
    console.log(userCreates);
    console.log(categoryCreates);
    console.log(productCreates);
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
