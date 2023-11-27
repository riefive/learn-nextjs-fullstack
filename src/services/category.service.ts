import { PrismaClient } from '@prisma/client';
import { CategoryType } from '@/types/category.type';

const prisma = new PrismaClient();

export async function categoryGetAll(): Promise<CategoryType[] | any> {
    try {
        const result = await prisma.category.findMany({});
        return result;
    } catch (error: any) {
        return { message: 'Failed to get data!!!', error: error.toString() };
    }
}

export async function categoryGetOne(id: number): Promise<CategoryType | any> {
    try {
        const result = await prisma.category.findUnique({
            where: { id },
        });
        return result;
    } catch (error: any) {
        return { message: 'Failed to get a data!!!', error: error.toString() };
    }
}

export async function categoryCreate(payloads: any): Promise<CategoryType | any> {
    try {
        const result = await prisma.category.create({
            data: payloads,
        });
        return result;
    } catch (error: any) {
        return { message: 'Failed to save a data!!!', error: error.toString() };
    }
}

export async function categoryUpdate(id: number, payloads: any): Promise<CategoryType | any> {
    try {
        const result = await prisma.category.update({
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

export async function categoryRemove(id: number): Promise<any> {
    try {
        const result = await prisma.category.delete({
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
