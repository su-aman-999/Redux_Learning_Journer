import { createStore } from "redux";
import { productsList } from "./productsList";

let initialState = {
  products: productsList,
  cartItems: [],
  wishList: [],
};

const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";
const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";

const WISHLIST_ADD_ITEM = "wishList/addItem";
const WISHLIST_REMOVE_ITEM = "wishList/removeWishItem";

function reducer(state = initialState, action) {
  console.log(state);

  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id,
        ),
      };

    case CART_ITEM_INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.id === action.payload.id)
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          return cartItem;
        }),
      };

    case CART_ITEM_DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((cartItem) => {
            if (cartItem.id === action.payload.id)
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            return cartItem;
          })
          .filter((cartItem) => cartItem.quantity >= 1),
      };

    case WISHLIST_ADD_ITEM:
      return {
        ...state,
        wishList: state.wishList.includes(action.payload.id)
          ? [...state.wishList]
          : [...state.wishList, action.payload.id],
      };

    case WISHLIST_REMOVE_ITEM:
      return {
        ...state,
        wishList: state.wishList.filter(
          (wishItemId) => wishItemId != action.payload.id,
        ),
      };

    default:
      return state;
  }
}

//? __REDUX_DEVTOOLS_EXTENSION__?.() → store enhancer
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({ type: CART_ADD_ITEM, payload: { id: 1, quantity: 1 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { id: 8, quantity: 1 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { id: 7, quantity: 1 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { id: 4, quantity: 1 } });

store.dispatch({ type: CART_REMOVE_ITEM, payload: { id: 8 } });

store.dispatch({ type: CART_ITEM_INCREASE_QUANTITY, payload: { id: 1 } });
store.dispatch({ type: CART_ITEM_INCREASE_QUANTITY, payload: { id: 1 } });

store.dispatch({ type: CART_ITEM_DECREASE_QUANTITY, payload: { id: 1 } });
store.dispatch({ type: CART_ITEM_DECREASE_QUANTITY, payload: { id: 4 } });
store.dispatch({ type: CART_ITEM_DECREASE_QUANTITY, payload: { id: 1 } });

store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { id: 4 } });
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { id: 3 } });
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { id: 6 } });

store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { id: 4 } });
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { id: 6 } });

console.log(store);
