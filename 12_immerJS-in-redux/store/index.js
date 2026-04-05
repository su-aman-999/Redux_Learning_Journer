import { createStore, combineReducers } from "redux";

import reducerCart from "./slices/cartSlice";
import reducerProducts from "./slices/productsSlice";
import reducerWishList from "./slices/wishListSlice";

// import { produce } from "immer";

//? We know that store is an object and all the keys in the store will be called slices.

//! 1. product slice
//! 2. cartItems sice
//! 3. wishList slice

const reducers = combineReducers({
  products: reducerProducts,
  cartItems: reducerCart,
  wishList: reducerWishList,
});

//? __REDUX_DEVTOOLS_EXTENSION__?.() → store enhancer
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__?.(),
);

/*
* ImmerJS
const users = [
  { name: "Ram", age: 22 },
  { name: "Shyam", age: 18 },
  { name: "Dhanshyam", age: 15 },
  { name: "Archit", age: 26 },
];

? Functional Programmin:- We don't direct modify object

! Mumating Way
users[1].age = 90; -> worng way

! Not Mutating Way
const newUsers = users.map((user) => {
  if (user.name === "Shyam") return { ...user, age: 25 };
  return { ...user };
});

! Perform Not Mamating operation in Matating way using ImmerJS
const newUsers = produce(users, (usersCopy) => {
  usersCopy is a Proxy Array of original array "users"
  usersCopy[1].age = 25;
});

console.log(users);
console.log(newUsers);
*/
