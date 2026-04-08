import Card from "./components/Card";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Card />
    </Provider>
  );
}

export default App;
