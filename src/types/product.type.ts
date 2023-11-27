import { CategoryType } from './category.type';

export interface ProductType {
    id: String;
    title: String;
    price: Number;
    description?: String;
    image?: String;
    categoryId: Number;
    category?: CategoryType;
}
