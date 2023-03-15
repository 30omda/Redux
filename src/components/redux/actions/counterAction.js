import {INCREMENT, DECREMENT, INC_BY_VALUE, DEC_BY_VALUE} from './Types';


export const incrementAction = () => {
    return{
        type: INCREMENT
    }
};
export const decrementAction = () => {
    return{
        type: DECREMENT
    }
};
export const incrementByValueAction = () => {
    return{
        type: INC_BY_VALUE
    }
};
export const decrementByValueAction = () => {
    return{
        type: DEC_BY_VALUE
    }
}