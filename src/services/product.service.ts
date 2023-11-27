import { PrismaClient } from '@prisma/client';
import { ProductType } from '@/types/product.type';

const prisma = new PrismaClient();

export async function productGetAll(): Promise<ProductType[] | any> {
    try {
        const result = await prisma.product.findMany({});
        return result;
    } catch (error: any) {
        return { message: 'Failed to get data!!!', error: error.toString() };
    }
}

export async function productGetOne(id: string): Promise<ProductType | any> {
    try {
        const result = await prisma.product.findUnique({
            where: { id },
        });
        return result;
    } catch (error: any) {
        return { message: 'Failed to get a data!!!', error: error.toString() };
    }
}

export async function productCreate(payloads: any): Promise<ProductType | any> {
    try {
        const result = await prisma.product.create({
            data: payloads,
        });
        return result;
    } catch (error: any) {
        return { message: 'Failed to save a data!!!', error: error.toString() };
    }
}

export async function userUpdate(
    id: string,
    payloads: any
): Promise<ProductType | any> {
    try {
        const result = await prisma.product.update({
            where: {
                id,
            },
            data: { ...payloads },
        });
        return result;
    } catch (error: any) {
        return {
            message: 'Failed to update a data!!!',
            error: error.toString(),
        };
    }
}

export async function productRemove(id: string): Promise<any> {
    try {
        const result = await prisma.product.delete({
            where: {
                id,
            },
        });
        return result;
    } catch (error: any) {
        return {
            message: 'Failed to delete a data!!!',
            error: error.toString(),
        };
    }
}
