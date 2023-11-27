import { CategoryType } from './category.type';

export interface ProductType {
    id: string;
    title: string;
    price: number;
    description?: string;
    image?: string;
    categoryId: number;
    category?: CategoryType;
}
