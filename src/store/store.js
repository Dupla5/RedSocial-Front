import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer';
import { dataReducer } from '../reducers/dataReducer';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const reducers = combineReducers({
    auth: authReducer,
    data: dataReducer,

});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
));