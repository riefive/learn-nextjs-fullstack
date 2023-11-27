import { productGetAll } from '@/services/product.service';

export default function PageAdminProduct() {
    productGetAll().then((result: any) => {
        console.log(result);
    });
    return <h1>Product page in Next.js!</h1>;
}
