import {shape, string, number} from 'prop-types';

export const ProductShape = shape({
    id: number.isRequired,
    title: string.isRequired,
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    price: number,
    quantity: number,
    rating: number,
    stock: number,
    thumbnail: string,
});