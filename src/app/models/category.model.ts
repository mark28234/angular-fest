export interface  CategoryList {
    categoryList: Category[];
}

export interface Category {
    id: number;
    name: string;
    parent: number;
}