import { createStore } from "redux";
import { myCreateStore } from "./my-redux";
const postCountElement = document.querySelector(".post-count");

// let state = {
//   count: 0,
//   name: "aman singh",
//   age: 22,
// };

// let prevState = state;

// function increament() {
//   //? Update state through Mutating
//   //!   state.count = state.count + 1;

//   //? Update state through Not Mutating
//   state = { ...state, count: state.count + 1 };
// }

// increament();
// console.log(state);
// increament();
// console.log(state);
// increament();
// console.log(state);
// increament();
// console.log(state);

let initialState = {
  post: 0,
  name: "aman singh",
  age: 22,
};

//? Action Type
const INCREAMENT = "post/increament";
const DECREAMENT = "post/decreament";
const INCREASE_BY = "post/increaseBy";
const DECREASE_BY = "post/decreasetBy";

function reducer(state = initialState, action) {
  switch (action?.type) {
    case INCREAMENT:
      return { ...state, post: state.post + 1 };
    case DECREAMENT:
      return { ...state, post: state.post - 1 };
    case INCREASE_BY:
      return { ...state, post: state.post + action.payload };
    case DECREASE_BY:
      return { ...state, post: state.post - action.payload };
    default:
      return state;
  }
  return state;
}

//? __REDUX_DEVTOOLS_EXTENSION__?.() → store enhancer
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
  postCountElement.innerText = store.getState().post;
});

postCountElement.innerText = store.getState().post;

store.dispatch({ type: INCREAMENT });
store.dispatch({ type: DECREAMENT });
store.dispatch({ type: INCREASE_BY, payload: 10 });
store.dispatch({ type: DECREASE_BY, payload: 5 });
/*
? store return functions

? 1. ƒ observable() 
! 2. ƒ dispatch(action) 
! 3. ƒ getState() 
? 4. ƒ replaceReducer(nextReducer)
! 5. ƒ subscribe(listener) 

? 1. getState() → return current state
? 2. dispatch() → return current state
*/

postCountElement.addEventListener("click", () => {
  store.dispatch({ type: INCREAMENT });
});

//? stop subscribe
unsubscribe();

//? Why do we say Reducer: It reduce of state + action and create another state

//? action object
// let action = {
//     type: "increase-post"
//     payload: "data"
// }

// //?What Redux will do

//! name change reduxState → initialState
// reduxState = reducer(reduxState, { type: INCREAMENT });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: INCREAMENT });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: DECREAMENT });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/khana" });
// console.log(reduxState);

// //* use payload

// reduxState = reducer(reduxState, { type: INCREASE_BY, payload: 10 });
// console.log(reduxState);

// reduxState = reducer(reduxState, { type: "DECREASE_BY, payload: 5 });
// console.log(reduxState);

console.log("Make Your Own Redux");

//! myCreateStore()

const myStore = myCreateStore(reducer);

console.log(myStore);

const unsubscribe1 = myStore.subscribe(() => {
  console.log(myStore.getState());
});

const unsubscribe2 = myStore.subscribe(() => {
  console.log("Unsubcribe 2");
});

const unsubscribe3 = myStore.subscribe(() => {
  console.log("Unsubcribe 3");
});

myStore.dispatch({ type: INCREAMENT });
myStore.dispatch({ type: DECREAMENT });
myStore.dispatch({ type: INCREASE_BY, payload: 10 });
unsubscribe1();
myStore.dispatch({ type: DECREASE_BY, payload: 5 });
