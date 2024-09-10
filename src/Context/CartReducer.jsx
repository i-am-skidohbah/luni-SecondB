import React from "react";

const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.products];

    case "Remove":

    case "Increase":
  const Index = state.findIndex((p) => p.id === action.id);
  if (Index !== -1) { // Check if item found before updating
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
  if (IndexD !== -1 && state[IndexD].quantity > 0) { // Check for negative quantity
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
