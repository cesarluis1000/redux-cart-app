import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState:  [],
    reducers: {
        addToCart: (state, action) => {
            const itemFound = state.find((item) => item.id === action.payload.id);
            if (itemFound) {
                itemFound.quantity++;
                itemFound.subtotal = itemFound.quantity * itemFound.price;
            } else {
                action.payload = {...action.payload, quantity: 1, subtotal: action.payload.price};
                state.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            const itemFound = state.find((item) => item.id === action.payload);
            if (itemFound) {
                itemFound.quantity--;
                itemFound.subtotal = itemFound.quantity * itemFound.price;
                if (itemFound.quantity === 0) {
                    state.splice(state.indexOf(itemFound), 1);
                }
            }
        },
        clearCart: (state, action) => {
            return [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;