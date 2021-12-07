import React from "react";
import './index.css';

class CartItem extends React.Component{
    constructor() {
        super();
        this.state = {
            price: 990,
            title: "Mobile Phone",
            qty: 1,
            img:"",
        }
    }
    render() {

        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt="Item"/>
                </div>
                <div className="right-block">
                    <div style ={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}} > Rs: {price}</div>
                    <div style={{ color: '#777' }}>Qty : { qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828926.png" alt="increase" className="actions-icons" />
                        <img src="https://cdn-icons.flaticon.com/png/128/2985/premium/2985073.png?token=exp=1638869010~hmac=f22c19f79aa8d9b10051ee84044e090f" alt="decrease" className="actions-icons" />
                        <img src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" alt="delete" className="actions-icons" />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor:'#CCC'
    }
}

export default CartItem;