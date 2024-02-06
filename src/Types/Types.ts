export interface IProduct {
    title: string;
    price: number;
    _id: string;
    newPrice?:number;
    stock:number;
    inStock ?: boolean;
    description: string;
    sizes ?: {
        size: number;
        price: number;
      }[] | null;
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
    stock: number;
    title: string;
    _id: string;
    price: number;
    img : string;
    qty : number;
    onChange ?: () => void;
    category ?: string;
    remove: (id:string) => void;
    shortdesc ?: string;
    productselectedSize ?: string;
    productselectedPrice?:string;
}