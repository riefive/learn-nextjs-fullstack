import { PrismaClient } from '@prisma/client';
import { UserType } from '@/types/user.type';

const prisma = new PrismaClient();

export async function userGetAll(): Promise<UserType[] | any> {
    try {
        const result = await prisma.user.findMany({});
        return result;
    } catch (error: any) {
        return { message: 'Failed to get data!!!', error: error.toString() };
    }
}

export async function userGetOne(id: string): Promise<UserType | any> {
    try {
        const result = await prisma.user.findUnique({
            where: { id },
        });
        return result;
    } catch (error: any) {
        return { message: 'Failed to get a data!!!', error: error.toString() };
    }
}

export async function userCreate(payloads: any): Promise<UserType | any> {
    try {
        const result = await prisma.user.create({
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
): Promise<UserType | any> {
    try {
        const result = await prisma.user.update({
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

export async function userRemove(id: string): Promise<any> {
    try {
        const result = await prisma.user.delete({
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
