import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer';
import { courseReducer } from '../reducers/courseReducer';
import { dataReducer } from '../reducers/dataReducer';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const reducers = combineReducers({
    auth: authReducer,
    data: dataReducer,
    course: courseReducer,

});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
));