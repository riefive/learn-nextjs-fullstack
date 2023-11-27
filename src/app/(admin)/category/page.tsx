import { categoryGetAll } from "@/services/category.service"

export default function PageAdminCategory() {
    categoryGetAll().then((result: any) => {
        console.log(result)
    })
    return <h1>Category page in Next.js!</h1>
}