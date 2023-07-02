import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { decrement, increment, incrementByAmount } from "./slices";

function App() {
  const [incrementBy, setIncrementBy] = useState(2);
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    setIncrementBy(Number(target.value));
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>INCREMENT</button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      </div>
      <div className="card">
        <input
          type="number"
          placeholder="Increment By"
          value={incrementBy}
          onChange={onInputChange}
        />
        <button
          onClick={() => dispatch(incrementByAmount(incrementBy))}
        >{`INCREMENT BY ${incrementBy}`}</button>
      </div>
    </>
  );
}

export default App;
