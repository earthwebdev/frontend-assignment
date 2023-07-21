import { Product } from '@/interface/productInterface';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
interface cartCustom extends Product{
    cartQuantity: number;
}
export interface CartState {
    cartItems: Array<cartCustom>;
    cartTotalQuantity: number;
    cartTotalAmount: number;
}

const initialState: CartState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

export const CartSlice = createSlice({
    name: "CartSlice",
    initialState,
    reducers:{
        addToCart: (state, data) => {
            const existingIndex = state.cartItems.findIndex( (item) => item.id === data.payload.id);
            console.log(existingIndex);
            if(existingIndex >= 0){
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    cartQuantity: state.cartItems[existingIndex].cartQuantity + 1
                };
            } else {
                let newCartItems: cartCustom = {...data.payload, cartQuantity:1};
                state.cartItems.push(newCartItems);
                //state.cartItems.push(...state.cartItems, data.payload.cartQuantity)
            }
        },
        decreaseCart: (state, data) => {
            const existingIndex = state.cartItems.findIndex( (item) => item.id === data.payload.id);
            //console.log(existingIndex);
            if(existingIndex >= 0){
                if(state.cartItems[existingIndex].cartQuantity > 1 ){
                    state.cartItems[existingIndex] = {
                        ...state.cartItems[existingIndex],
                        cartQuantity: state.cartItems[existingIndex].cartQuantity - 1
                    };
                } else  if(state.cartItems[existingIndex].cartQuantity === 1 ){                    
                    const newItems: any = state.cartItems.filter((item: cartCustom) => {
                        return item.id !== data.payload.id
                    });
                    state.cartItems = newItems;
                }
                
            }

        },
        removeCart: (state, data) => {            
            state.cartItems.map((cartItem: cartCustom) => {
                if(cartItem.id === data.payload.id){
                    const newCartItems = state.cartItems.filter((item: cartCustom) => {
                        return item.id !== data.payload.id
                    });
                    state.cartItems = newCartItems;
                }
            });
            
        },
        getTotal: (state) => {
            let { total, quantity } = state.cartItems.reduce((cartData: any, item: any) => {
                const itemTotal = item.price * item.cartQuantity;

                cartData.total += itemTotal;
                cartData.quantity += item.cartQuantity;
                return cartData;
            }, {
                quantity: 0,
                total: 0
            });
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;

        },
        clearCart: (state) => {
            state.cartItems = [];
        },
    }
});
export const {addToCart, decreaseCart, removeCart, getTotal, clearCart} = CartSlice.actions;

export default CartSlice.reducer;