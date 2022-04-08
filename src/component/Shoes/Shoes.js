import React from 'react';
import { multiply } from '../utilities/Calculate';

const Shoes = () => {
    const first = 33;
    const second = 49;
    const total = multiply(first, second);

    return (
        <div>
            <h3>Hello!! Come to our Shoes Shop</h3>
            <p>Total Shoes: {total}</p>
        </div>
    );
};

export default Shoes;