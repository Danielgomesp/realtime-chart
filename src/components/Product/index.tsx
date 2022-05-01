import React from 'react';

import { Product as IProduct } from 'model';

import { Container, Id, Temperature } from './styles';

interface ProductProps extends Omit<IProduct, 'data' | 'timestamp'> { }

function Product({ id, temperature }: ProductProps) {
  return (
    <Container>
      <Id>{`ID ${id}`}</Id>
      <Temperature>{`Temp: ${temperature} C`}</Temperature>
    </Container>
  );
}

export default Product;
