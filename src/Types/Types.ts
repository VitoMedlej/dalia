export interface IProduct {
    title: string;
    price: number;
    _id: string;
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