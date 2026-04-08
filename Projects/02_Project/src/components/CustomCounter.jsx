import { useState } from "react";
import { SetSteps } from "../slices/slicer1";
import { useDispatch } from "react-redux";

function CustomCounter() {
  const [input, setInput] = useState(1);
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="number"
        onChange={(e) => {
          setInput(Number(e.target.value));
        }}
        value={input}
      />
      <button
        className="counter"
        onClick={() => {
          dispatch(SetSteps({ step: input }));
          setInput(0);
        }}
      >
        Submit
      </button>
    </>
  );
}

export default CustomCounter;
