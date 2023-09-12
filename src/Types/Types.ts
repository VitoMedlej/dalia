export interface IProduct {
    title: string;
    price: number;
    _id: string;
    inStock ?: boolean;
    description: string;
    images: string[] | [];
    attributes ?: [] | 
        {
            name : string,
            value : string | number
        }[]
    ;
    category : string;
    isFeatured?: boolean;
}
export interface ICartItem {
    title: string;
    _id: string;
    price: number;
    img : string;
    qty : number;
    onChange ?: () => void;
    category ?: string;
    remove: (id:string) => void;
    shortdesc ?: string;
    selectedColor ?: string;
}