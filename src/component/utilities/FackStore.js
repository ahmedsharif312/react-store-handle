// Local Store has been work 

const localStore = id => {

    let shoppingCart = {};

    const storeCart = localStorage.getItem('best-shopping-cart');
    if (storeCart) {
        shoppingCart = JSON.parse(storeCart);
    }


    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity)
    }
    else {
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('best-shopping-cart', JSON.stringify(shoppingCart))

}

const removeLocalStore = id => {
    const removeCart = localStorage.getItem('best-shopping-cart');
    if (removeCart) {
        const removeCartLs = JSON.parse(removeCart);
        if (id in removeCartLs) {
            delete removeCartLs[id];
            localStorage.setItem('best-shopping-cart', JSON.stringify(removeCartLs))

        }

    }

}

export {
    localStore,
    removeLocalStore
};