import CartActionTypes from "./cart-types";

 export const toggleCartHidden = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
}

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItemFromCart = item => {
    return{
        type: CartActionTypes.CLEAR_ITEMS_FROM_CART,
        payload: item
    }

}