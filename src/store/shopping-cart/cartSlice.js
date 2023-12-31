

import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuanity: 0,
    totalAmount: 0,

}
const cartSlice = createSlice 
    ({
        name:'cart',
        initialState: initialState,
    
        reducers: {
            addItem(state,action){
                const newItem = action.payload
                const existingItem = state.cartItems.find(item=> item.id ===
                    newItem.id)
                    state.totalQuanity ++
    
                    if(!existingItem){
    
    
                        state.cartItems.push({
                            id: newItem.id,
                            title: newItem.title,
                            image01: newItem.image01,
                            price: newItem.price,
                            quantity: 1,
                            totalPrice: newItem.price,
    
    
                        })
                    
                    }
                    else {
                        existingItem.quantity++
                        existingItem.totalPrice = Number(existingItem.totalPrice) 
                        + Number(newItem.price)
                    }
    
                    state.totalAmount = state.cartItems.reduce((total,item)=>(
                        total + Number(item.price) * Number(item.quantity)
                    ))
            }
        }
    
    })
    

export const cartAction = cartSlice.actions
export default cartSlice;