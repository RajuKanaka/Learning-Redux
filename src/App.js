import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions/Action";
import IncDec from "./Reducers/Reducers";
export default function App() {
  const state = useSelector((state) => state.IncDec);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(decrement(5));
        }}
      >
        -
      </button>
      <input type="text" value={state} />
      <button
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        +
      </button>
    </div>
  );
}
