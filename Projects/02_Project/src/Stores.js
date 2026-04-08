import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./slices/slicer1";

const store = configureStore({
  reducer: {
    slice1: slice1Reducer,
  },
});

export default store;

/*
✅ Is file ka kaam:
- Sare reducers ko combine karna
- Global store banana
*/

/* 
🔗 3. Dono ke bich relation
👉 Simple line me:

👉 createSlice reducer banata hai → store us reducer ko use karta hai



🔄 4. Full Flow (STEP BY STEP 🚀)

🟢 Step 1: Slice banta hai
createSlice()
👉 Ye deta hai:
reducer
actions

🟢 Step 2: Store me add karte hain
reducer: {
  slice1: slice1Reducer,
}
👉 Ab store ko pata hai:
"slice1 ka state kaise update hoga"

🟢 Step 3: Component se action dispatch hota hai
dispatch(Increament());

🟢 Step 4: Action reducer ke paas jata hai
slice1Reducer(state, action)

🟢 Step 5: State update hoti hai
state.count++

🟢 Step 6: UI re-render hota hai
👉 Updated value show hoti hai

📦 Visual Flow (Easy samajh 👇)
Component
   ↓ dispatch()
Action (Increament)
   ↓
Reducer (slice1Reducer)
   ↓
State update
   ↓
Store update
   ↓
UI re-render
*/

/* 
📝 Redux Toolkit Notes (createSlice → configureStore → Global Store)
🧩 1. createSlice kya karta hai?

👉 createSlice() ek function hai jo:

initial state define karta hai
reducers (logic) banata hai
actions automatically generate karta hai
✅ Example:
const reactslicer = createSlice({
  name: "slice1",
  initialState: { count: 1 },
  reducers: {
    Increament: (state) => {
      state.count++;
    },
  },
});
📦 Output of createSlice
reactslicer.reducer   // reducer function
reactslicer.actions   // action creators
🧠 Important Concept

👉 Reducer ke andar hi initialState hota hai
👉 Yehi future me store ka data banega

🏪 2. configureStore kya karta hai?

👉 configureStore():

sare reducers ko combine karta hai
global store banata hai
✅ Example:
const store = configureStore({
  reducer: {
    slice1: slice1Reducer,
  },
});
🔗 3. Relation (createSlice ↔ store)

👉 createSlice → reducer banata hai
👉 store → reducer ko use karke state banata hai

🔄 4. Global Store kaise banta hai?

👉 Jab store create hota hai, Redux internally ye karta hai:

slice1Reducer(undefined, { type: "@@INIT" })

👉 Reducer return karta hai:

initialState
📦 Final Global Store Structure
{
  slice1: {
    count: 1
  }
}
🔄 5. Complete Flow 🚀
createSlice()
   ↓
initialState + reducer + actions
   ↓
configureStore()
   ↓
Redux INIT action run karta hai
   ↓
initialState store me set hota hai
   ↓
Global Store ready 🎉
⚡ 6. Action Flow
dispatch(Increament());

👉 Flow:

dispatch → action → reducer → state update → UI re-render
🧠 7. Key Points (Very Important 💯)

✔ Store me direct state pass nahi hota
✔ State reducers ke through aata hai
✔ initialState hi starting data hota hai
✔ Redux internally INIT action run karta hai
✔ Multiple slices = multiple state parts

🏢 Real Life Analogy
Store = Company 🏭
Slice = Department 🏢
Reducer = Manager 👨‍💼
State = Data 📊
🎯 Final One-Line Summary

👉 createSlice reducer banata hai aur configureStore un reducers se global state create karta hai (initialState ke through).
*/
