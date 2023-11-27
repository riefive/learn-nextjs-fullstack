import { userGetAll } from '@/services/user.service';

export default function PageAdminUser() {
    userGetAll().then((result: any) => {
        console.log(result);
    });
    return <h1>User page in Next.js!</h1>;
}
