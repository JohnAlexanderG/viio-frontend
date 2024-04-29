import { useEffect, useState } from 'react';
import { viioSecuredApi } from '../../api/viioApi';
import CartList from '../../components/shared/carts/carts';
import { Cart, ResponsePrivatePath } from '../../interfaces';

export const ProductsPage = () => {

  const [carts, setCarts] = useState<Cart[]>([])
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getProducts()
      .then(({ result }) => {
        setCarts(result.carts);
      })
  }, [])

  const getProducts = async (): Promise<ResponsePrivatePath> => {
    return (await viioSecuredApi.get('/productos')).data
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  const filteredCarts = carts && carts.map(cart => {
    return {
      ...cart,
      products: cart.products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    };
  }).filter(cart => cart.products.length > 0);

  return (
    <>
      <h1>Productos</h1>
      <hr />
      <input
        type="text"
        placeholder="Buscar producto..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        {filteredCarts !== undefined && <CartList carts={filteredCarts!} />}
      </div>

    </>
  );
};
