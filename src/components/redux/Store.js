import {createStore} from 'redux';
import counterReducer from './reducer/CounterReducer';

const store  = createStore(counterReducer);

export default store;