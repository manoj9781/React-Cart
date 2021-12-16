import React from 'react'

const Navbar = () => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/1170/1170627.png" alt="cartIcon" />
                <span style={styles.cartCount}>3</span>
            </div>
        </div>
    )

}
    const styles = {
        cartIcon: {
            height: 32,
            marginRight:20,
        },
        nav: {
            height: 70,
            background: '#472b72',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems:'center',
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
            right:'0'
            
        }
    }


export default Navbar
