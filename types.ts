export interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    rating: number;
    brand: string;
    description: string;
    thumbnail: string;
    images: string[];
}

export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export interface Image {
    id: string;
    url: string;
}

export interface Billboard {
    label: string;
    imageUrl: string;
}

export interface Category {
    id: string;
    name: string;
    billboard?: Billboard;
}

export interface Size {
    id: string;
    name: string;
    value: string;
}

export interface Color {
    id: string;
    name: string;
    value: string;
}
