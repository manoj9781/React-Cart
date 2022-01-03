import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import './index.css';

// import * as firebase from 'firebase';
import firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id'] = doc.id;
    //       return data;
    //     });
    //     this.setState({ products: products, loading: false });
    //   });
   this.db
      .collection('products')
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //   products,
    // });

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef.update({
      qty: products[index].qty + 1,
    }).then(() => {
      console.log("Update Succesfully");
    }).catch((error) => {
      console.log("Error", error);
    })
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    // products[index].qty -= 1;
    // this.setState({
    //   products,
    // });
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef.update({
      qty: products[index].qty - 1,
    }).then(() => {
      console.log("Update Succesfully");
    }).catch((error) => {
      console.log("Error", error);
    })
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
    });
    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.map((product) => {
      if (product.qty > 0) {
        total = total + product.qty * product.price;
      }
      return ' ';
    });
    return total;
  };

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: "",
        price: 78,
        qty: 2,
        title:"Washing Machine",
      }).then((docRef) => {
        console.log("Product Has been added", docRef);
      }).catch((err) => {
      console.log("Error", err);
    })
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button style={styles.button} onClick={this.addProduct}>Add a Product</button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div className="total-Value">Total :{this.getCartTotal()} </div>
      </div>
    );
  }
}


// const styles = {
//   button: {
//     color:'#444',
//     fontSize: 24,
//     margin: 20,
    
//   }
// }
export default App;

// import React from "react";

// // import CartItem from './CartItem';
// import Cart from "./Cart";
// import Navbar from "./Navbar";
// // import firebase from "firebase";
// import * as firebase from 'firebase';
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       products: [],
//       loading: true
//     };
//   }

//   componentDidMount() {
//     firebase
//       .firestore()
//       .collection("products")
//       .get()
//       .then(snapshot => {
//         const products = snapshot.docs.map(doc => {
//           const data = doc.data();
//           data["id"] = doc.id;
//           return data;
//         });
//         this.setState({ products: products, loading: false });
//       });
//   }

//   handleIncreaseQuantity = product => {
//     const { products } = this.state;
//     const index = products.indexOf(product);

//     products[index].qty += 1;

//     this.setState({
//       products
//     });
//   };

//   handleDecreaseQuantity = product => {
//     const { products } = this.state;
//     const index = products.indexOf(product);

//     if (products[index].qty === 0) {
//       return;
//     }
//     products[index].qty -= 1;

//     this.setState({
//       products
//     });
//   };

//   handleDeleteProduct = id => {
//     const { products } = this.state;

//     const items = products.filter(product => product.id !== id);

//     this.setState({
//       products: items
//     });
//   };

//   getcountOfCartItems = () => {
//     const { products } = this.state;
//     let count = 0;

//     products.forEach(product => {
//       count += product.qty;
//     });

//     return count;
//   };

//   getcartTotal = () => {
//     const { products } = this.state;
//     let cartTotal = 0;

//     products.map(product => {
//       if (product.qty > 0) {
//         cartTotal = cartTotal + product.qty * product.price;
//       }
//       return "";
//     });

//     return cartTotal;
//   };

//   render() {
//     const { products, loading } = this.state;
//     return (
//       <div className="App">
//         <Navbar count={this.getcountOfCartItems()} />
//         <Cart
//           onIncreaseQuantity={this.handleIncreaseQuantity}
//           onDecreaseQuantity={this.handleDecreaseQuantity}
//           onDeleteProduct={this.handleDeleteProduct}
//           products={products}
//         />
//         {loading && <h1>Loading Products...</h1>}
//         <div style={{ padding: 10, fontSize: 20 }}>
//           TOTAL : {this.getcartTotal()}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
