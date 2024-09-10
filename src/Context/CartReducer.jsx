import React from "react";


export const totalItem = (cart) => {
  return cart.reduce((sum, products) => sum + products.quantity, 0);
};

export const totalPrice = (cart) => {
  return cart.reduce(
    (total, products) => total + products.quantity * products.price,
    0
  );
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.products];

    case "Remove":
      return state.filter((p) => p.id !== action.id);

    case "Increase":
      const Index = state.findIndex((p) => p.id === action.id);
      if (Index !== -1) {
        // Check if item found before updating
        const newState = [...state];
        newState[Index].quantity += 1;
        return newState;
      } else {
        // Handle case where item not found (optional)
        return state;
      }
      break;

    case "Decrease":
      const IndexD = state.findIndex((p) => p.id === action.id);
      if (IndexD !== -1 && state[IndexD].quantity > 0) {
        // Check for negative quantity
        const newState = [...state];
        newState[IndexD].quantity -= 1;
        return newState;
      } else {
        // Handle case where item not found or quantity already 0 (optional)
        return state;
      }
      break;
  }
};

export default CartReducer;
