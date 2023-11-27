import { PrismaClient } from '@prisma/client';
import { UserType } from '@/types/user.type';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function userLogin(email: string, password: string): Promise<any> {
    try {
        const user: UserType | any = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) return null;
        const isValidPassword = bcrypt.compareSync(
            password,
            user.password || ''
        );
        if (!isValidPassword) return null;
        if (user.password) delete user.password || null;
        return user;
    } catch (error: any) {
        return { message: 'Failed to get data!!!', error: error.toString() };
    }
}
