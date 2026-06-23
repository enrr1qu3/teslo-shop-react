import type { User } from "./user.interface";

export interface Product {
    description: string;
    gender: Gender;
    id: string;
    images: string[];
    price: number;
    sizes: Size[];
    slug: string;
    stock: number;
    tags: string[];
    title: string;
    user: User;
}

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type Gender = 'kid' | 'women' | 'men';