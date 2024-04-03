import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {counterActions} from "../store/counter"

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter); //sottoscrizione automatica realizzata da Redux a una parte dello store (counter)
  const showCounter = useSelector((state) => state.counter.showCounter);


  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleIncrementWithPayload = () => {
    dispatch(counterActions.incrementWithPayload(10));
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
 <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button className="counterButtons" onClick={handleIncrement}>
          increment
        </button>
        <button className="counterButtons" onClick={handleIncrementWithPayload}>
          increment by 5
        </button>
        <button className="counterButtons" onClick={handleDecrement}>
          decrement
        </button>
      </div>
      <button className="counterButtons" onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
