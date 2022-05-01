import React from 'react';

import { Product as IProduct } from 'model';

import Product from 'components/Product';

import { Container } from './styles';

interface ProductListProps {
  products: Array<IProduct>,
}

function ProductList({ products }: ProductListProps) {
  return (
    <Container>
      {
        products?.map((product) => (
          <Product key={product.id} id={product.id} temperature={product.temperature} />
        ))
      }
    </Container>
  );
}

export default ProductList;
