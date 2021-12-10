import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component {
    render() {

        const arr = [1, 2, 3];
        return (
            <div className='cart'>
                {arr.map((item) => {
                    return item + 4;
               }) }
            </div>
        )
    }
}



export default Cart;
