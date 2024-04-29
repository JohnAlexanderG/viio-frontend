export interface ResponsePrivatePath {
    result:     ListProducts;
    message:    string;
    statusCode: number;
}

export interface ListProducts {
    carts: Cart[];
    total: number;
    skip:  number;
    limit: number;
}

export interface Cart {
    id:              number;
    products:        Product[];
    total:           number;
    discountedTotal: number;
    userID:          number;
    totalProducts:   number;
    totalQuantity:   number;
}

export interface Product {
    id:                 number;
    title:              string;
    price:              number;
    quantity:           number;
    total:              number;
    discountPercentage: number;
    discountedPrice:    number;
    thumbnail:          string;
}
