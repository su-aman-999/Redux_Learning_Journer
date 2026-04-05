//? ⟨⟨⟨--- DUCS PATTERN ---⟩⟩⟩

import { produce } from "immer";

//! Action Type
export const CART_ADD_ITEM = "cart/addItem";
export const CART_REMOVE_ITEM = "cart/removeItem";
export const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";
export const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";

//! Action Creaters
export function increaseCartItemQuantity(id) {
  return { type: CART_ITEM_INCREASE_QUANTITY, payload: { id } };
}

export function decreaseCartItemQuantity(id) {
  return { type: CART_ITEM_DECREASE_QUANTITY, payload: { id } };
}

export function addCartItem(productData) {
  return { type: CART_ADD_ITEM, payload: productData };
}

export function removeCartItem(id) {
  return { type: CART_REMOVE_ITEM, payload: { id } };
}

//! Reducer
export default function reducerCart(originalState = [], action) {
  //  ! Mumating Code
  /*
  switch (action.type) {
    case CART_ADD_ITEM:
      return state.find((item) => item.id === action.payload.id)
        ? state.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : { ...item },
          )
        : [...state, { ...action.payload, quantity: 1 }];

    case CART_REMOVE_ITEM:
      return state.filter((cartItem) => cartItem.id !== action.payload.id);

    case CART_ITEM_INCREASE_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.id === action.payload.id)
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        return cartItem;
      });

    case CART_ITEM_DECREASE_QUANTITY:
      return state
        .map((cartItem) => {
          if (cartItem.id === action.payload.id)
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity >= 1);

    default:
      return state;
  }
      */

  //! ImmerJS and Immutating
  return produce(originalState, (state) => {
    const existingItemIndex = state.findIndex(
      (item) => item.id === action.payload.id,
    );

    switch (action.type) {
      case CART_ADD_ITEM:
        if (existingItemIndex !== -1) {
          state[existingItemIndex].quantity += 1;
          break;
        }
        state.push({ ...action.payload, quantity: 1 });
        break;

      case CART_REMOVE_ITEM:
        state.splice(existingItemIndex, 1);
        break;

      case CART_ITEM_INCREASE_QUANTITY:
        state[existingItemIndex].quantity += 1;
        break;

      case CART_ITEM_DECREASE_QUANTITY:
        if (state[existingItemIndex].quantity > 1)
          state[existingItemIndex].quantity -= 1;
        else state.splice(existingItemIndex, 1);
    }
    return state;
  });
}
