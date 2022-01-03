import React from 'react';

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
    props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} alt='Product Pic' />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: '#777' }}> Rs: {price}</div>
        <div style={{ color: '#777' }}>Qty : {qty}</div>
        <div className="cart-item-actions">
          {/* buttons */}
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828926.png"
            alt="increase"
            className="actions-icons"
            style={styles.button}
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
            alt="decrease"
            className="actions-icons"
            style={styles.button}
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
            alt="delete"
            className="actions-icons"
            style={styles.button}
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: '#CCC',
  },
  button: {
    height: 25,
    width: 25,
    color: '#777',
    marginRight: 10,
  },
};

export default CartItem;

// increaseQuantity = () => {
//   // console.log('this', this.state);
//   //Set state form 1
//   //   this.setState({
//   //       qty:this.state.qty+1,
//   //   })

//   // setState form 2 if previous state required then use form 2
//   this.setState((prevState) => {
//     return {
//       qty: prevState.qty + 1,
//     };
//   });
// };

// decreaseQuantity = () => {
//   const { qty } = this.state;

//   if (qty === 0) {
//     return;
//   }
//   this.setState((prevState) => {
//     return {
//       qty: prevState.qty - 1,
//     };
//   });
// };
