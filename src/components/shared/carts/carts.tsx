import React from 'react';
import type { Cart, Product } from '../../../interfaces';

type Props = {
    carts: Cart[];
};

const Product: React.FC<Product> = (product) => (
    <div className="flex items-center justify-between p-2 border-b-2">
        <img src={product.thumbnail} alt={product.title} className="w-20 h-20" />
        <div className="flex-1 ml-4">
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p>Precio: ${product.price}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Total: ${product.total}</p>
            <p>Descuento: {product.discountPercentage}%</p>
            <p>Precio con descuento: ${product.discountedPrice}</p>
        </div>
    </div>
);

const Cart: React.FC<Cart> = ({ products }) => (
    <div className="flex flex-col">
        {products.map((product) => (
            <Product {...product} key={product.id} />
        ))}
    </div>
);

const CartList: React.FC<Props> = ({ carts }) => (
    <div className="grid grid-flow-row md:grid-flow-row-dense lg:grid-cols-3 gap-2">
        {carts.map((cart) => (
            <Cart {...cart} key={cart.id} />
        ))}
    </div>
);

export default CartList;