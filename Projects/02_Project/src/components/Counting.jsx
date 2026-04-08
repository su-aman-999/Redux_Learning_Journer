import { useSelector, useDispatch } from "react-redux";
import { Increament, Decreament, Reset } from "../slices/slicer1";
export default function Counting() {
  const slice1 = useSelector((state) => state.slice1);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Couter is {slice1.count}</h1>
      <h2>
        Step: <span className="counter">{slice1.step}</span>
      </h2>
      <button
        className="counter"
        onClick={() => {
          dispatch(Increament());
        }}
      >
        Increament
      </button>
      <button
        className="counter"
        onClick={() => {
          dispatch(Decreament());
        }}
      >
        Decreament
      </button>
      <button
        className="counter"
        onClick={() => {
          dispatch(Reset());
        }}
      >
        Reset
      </button>
    </>
  );
}
