import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux';
import counterReducer from './ducks/Counter.duck';
import skjema from './ducks/Skjema.duck';
import person from './ducks/Person.duck';



const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('prev state', store.getState());
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result;
};

const reducers = combineReducers({ counterReducer, skjema, person });

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;

