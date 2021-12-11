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
          qty: 5,
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

  handleIncreaseQuantity = (product) => {
    console.log('Incrase the quantity', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products
    })
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity = {this.handleDecreaseQuantity}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
