import React, { useEffect, useState } from 'react';
import Cosmatic from '../Cosmatic/Cosmatic';


const Cosmatics = () => {
    const [cosmatics, setcosmatics] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setcosmatics(data))
    }, [])

    return (
        <div>
            <h1>Welcome to my Cosmatics Shop</h1>

            {
                cosmatics.map(cosmatic => <Cosmatic
                    key={cosmatic.id}
                    gold={cosmatic}
                ></Cosmatic>)
            }
        </div>
    );
};

export default Cosmatics;