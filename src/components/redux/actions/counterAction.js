import {INCREMENT, DECREMENT} from './Types';


export const incrementAction = () => {
    return{
        type: INCREMENT
    }
}

export const decrementAction = () => {
    return{
        type: DECREMENT
    }
}