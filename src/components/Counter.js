// import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { DECREMENT, INCREMENT } from './redux/Types';
export default function Counter() {
    // const [count, setCount] = useState(0);
    const {count} = useSelector(state => state);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        // setCount( count + 1)
        dispatch ({
          type: INCREMENT
        })
    };
    const handleDecrement = () => {
        // setCount( count - 1)
        dispatch({
          type: DECREMENT
        })
    }
  return (
    <div>
        <p>Hello redux</p>
        <p>{count}</p>
        <button onClick={ handleIncrement }> Increment </button>
        <button onClick={ handleDecrement }> Decrement </button>
    </div>
  )
}
