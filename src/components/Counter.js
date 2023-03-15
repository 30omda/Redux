import { useSelector, useDispatch } from 'react-redux';
import { incrementAction, decrementAction, incrementByValueAction, decrementByValueAction } from './redux/actions/counterAction';
// import { INC_BY_VALUE } from './redux/actions/Types';


export default function Counter() {

    const {count} = useSelector(state => state);
    const dispatch = useDispatch();
    const handleIncrement = () => {

        dispatch (incrementAction())
    };

    const handleDecrement = () => {
      
        dispatch(decrementAction())
    };
    const handleIncByValue = () => {
      dispatch(incrementByValueAction())
    };
    const handleDecByValue = () => {
      dispatch(decrementByValueAction())
    };
  return (
    <div>
        <p>Hello redux</p>
        <p>{count}</p>
        <button onClick={ handleIncrement }> Increment </button>
        <button onClick={ handleDecrement }> Decrement </button>
        <button onClick={handleIncByValue}>Increment By Value 5</button>
        <button onClick={handleDecByValue}> Decrement By Value 5</button>
    </div>
  )
}
