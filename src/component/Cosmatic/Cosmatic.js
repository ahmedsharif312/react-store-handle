import React from 'react';
import { localStore, removeLocalStore } from '../utilities/FackStore';
import './Cosmatic.css'


const Cosmatic = (props) => {

    //distructing
    const { name, price, id } = props.gold

    //onclick Eventlistener 
    const addToCard = (id) => {
        localStore(id)
    }

    // Remove Eventlistener
    const removeCart = id => {
        removeLocalStore(id)
    }

    // 1. hard process to call data
    // const addCard = () => addToCard(id)

    return (
        <div className='product'>
            <h1>Buy this: {name}</h1>
            <p>Only for: ${id}</p>
            <p>Only for: ${price}</p>

            {/* 1. hard process to call data */}
            {/* <button onClick={addCard}>Add to Card</button> */}

            {/* 2. this is easy matord to send the data */}
            <button onClick={() => addToCard(id)}>Add to Card</button>
            <button onClick={() => removeCart(id)}>Remove</button>
        </div>
    );
};




// const Cosmatic = (props) => {
//     return (
//         <div>
//             <h1>Buy this: {props.gold.id}</h1>
//             <p>Only for: ${props.gold.price}</p>
//         </div>
//     );
// };

export default Cosmatic;