import { Product } from "@/hooks/useFetch";

export const calculateTotalPrice = (products: Product[]): number => {
    return products.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);
};
