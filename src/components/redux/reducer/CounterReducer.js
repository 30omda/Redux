import { INCREMENT, DECREMENT, INC_BY_VALUE, DEC_BY_VALUE } from "../actions/Types";
const counterReducer = (state = {count: 0}, action) => {
    switch(action.type){
        case INCREMENT :
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT: 
            return{
                ...state,
                count: state.count - 1
            }
        case INC_BY_VALUE:
            return{
                ...state,
                count: state.count + 5
            }
        case DEC_BY_VALUE: 
            return{
                ...state,
                count: state.count - 5
            }
        default: 
            return state;
    }
};

export default counterReducer;