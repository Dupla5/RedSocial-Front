import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import { courseReducer } from '../reducers/courseReducer';
import { dataReducer } from '../reducers/dataReducer';
import { hobbieReducer } from '../reducers/hobbieReducer';
import { studiesReducer } from '../reducers/studiesReducer';
import { languageReducer } from '../reducers/languagesReducer';
import { postReducer } from '../reducers/postReducer';
import { commentReducer } from '../reducers/commentReducer';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    data: dataReducer,
    course: courseReducer,
    studie: studiesReducer,
    hobbie: hobbieReducer,
    language: languageReducer,
    post: postReducer,
    comment:commentReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
));