import { createSlice } from "@reduxjs/toolkit";

const reactslicer = createSlice({
  name: "slice1",
  initialState: { count: 1, step: 1 },
  reducers: {
    Increament: (state) => {
      state.count = state.count + state.step;
    },
    Decreament: (state) => {
      state.count = state.count - state.step;
    },
    Reset: (state) => {
      state.count = 0;
      state.step = 1;
    },
    SetSteps(state, action) {
      state.step = action.payload.step;
    },
  },
});

export default reactslicer.reducer;
export const { Increament, Decreament, Reset, SetSteps } = reactslicer.actions;

/* 
! ✅ Is file ka kaam:
- State define karna (initialState)
- Logic likhna (reducers)
- Actions create karna

! 👉 Output deta hai:
reactslicer.reducer   //? reducer function
reactslicer.actions   // ?action creators
*/

/*//* reactslicer onject
{
  name: 'slice1',
  reducer: [Function: reducer],
  actions: {
    Increament: [Function: actionCreator] {
      toString: [Function (anonymous)],
      type: 'slice1/Increament',
      match: [Function (anonymous)]
    },
    Decreament: [Function: actionCreator] {
      toString: [Function (anonymous)],
      type: 'slice1/Decreament',
      match: [Function (anonymous)]
    },
    Reset: [Function: actionCreator] {
      toString: [Function (anonymous)],
      type: 'slice1/Reset',
      match: [Function (anonymous)]
    }
  },
  caseReducers: {
    Increament: [Function: Increament],
    Decreament: [Function: Decreament],
    Reset: [Function: Reset]
  },
  getInitialState: [Function: getInitialState],
  reducerPath: 'slice1',
  getSelectors: [Function: getSelectors],
  selectors: {},
  selectSlice: [Function: selectSlice],
  injectInto: [Function: injectInto]
}
*/

/*//* reactreducer.reducer 

👉 reactslicer.reducer ek function hai jo actions ke basis par state ko update karta hai.

👉 Tumne jo likha:
reducers: {
  Increament: (state) => {
    state.count = state.count + 1;
  }
}

👉 Internally ye convert hota hai:
function reducer(state, action) {
  if (action.type === "slice1/Increament") {
    return { ...state, count: state.count + 1 };
  }
}
*/

//*Action Creator
Increament(); //*-> { type: 'slice1/Increament', payload: undefined }
Decreament(); //*-> { type: 'slice1/Decreament', payload: undefined }
Reset(); //*-> { type: 'slice1/Reset', payload: undefined }
