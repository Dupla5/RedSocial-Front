import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer';
<<<<<<< HEAD
import { dataReducer } from '../reducers/dataReducer';
=======
>>>>>>> FrontVersionGaby
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const reducers = combineReducers({
    auth: authReducer,
<<<<<<< HEAD
    data: dataReducer,
=======
>>>>>>> FrontVersionGaby

});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
));