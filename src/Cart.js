import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Mobile Phone',
          qty: 19,
          img: '',
          id: 1,
        },
        {
          price: 90,
          title: 'Watch',
          qty: 8,
          img: '',
          id: 2,
        },
        {
          price: 990,
          title: 'Laptop',
          qty: 7,
          img: '',
          id: 3,
        },
      ],
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default Cart;
