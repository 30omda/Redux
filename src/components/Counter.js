import { useSelector, useDispatch } from 'react-redux';
import { incrementAction, decrementAction } from './redux/actions/counterAction';


export default function Counter() {

    const {count} = useSelector(state => state);
    const dispatch = useDispatch();
    const handleIncrement = () => {

        dispatch (incrementAction())
    };

    const handleDecrement = () => {
      
        dispatch(decrementAction())
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
