export interface ProductDto {
    id:string,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[],
    rating: {}
}