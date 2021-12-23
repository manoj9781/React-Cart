import React from 'react';

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://cdn-icons.flaticon.com/png/128/3002/premium/3002254.png?token=exp=1640264497~hmac=d6cc40dffc97669a3bbd4ecd7e65a28c"
          alt="cartIcon"
        />
        <span style={styles.cartCount}>{props.count} </span>
      </div>
    </div>
  );
};
const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: '#472b72',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cartIconContainer: {
    position: 'relative',
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    top: '-9',
    right: '0',
  },
};

export default Navbar;
