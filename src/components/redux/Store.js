import {createStore} from 'redux';
import counterReducer from './reducer/CounterReducer';
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store  = createStore(counterReducer, enhancer());

export default store;