import "./App.css";
import Counting from "./components/Counting";
import CustomCounter from "./components/CustomCounter.jsx";
import store from "./stores.js";
import { Provider } from "react-redux";

function App() {
  console.log(store);

  return (
    <Provider store={store}>
      <Counting />
      <br />
      <CustomCounter />
    </Provider>
  );
}

export default App;
