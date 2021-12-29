import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import './index.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Iphone',
          qty: 2,
          img: 'https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
          id: 1,
        },
        {
          price: 90,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
          id: 2,
        },
        {
          price: 990,
          title: 'Laptop',
          qty: 3,
          img: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
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
      products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.map((product) => {
      if (product.qty > 0) {
        total = total + product.qty * product.price;
      }
      return " ";
    })
    return total;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div className='total-Value'>Total :{this.getCartTotal()} </div>
      </div>
    );
  }
}
export default App;
