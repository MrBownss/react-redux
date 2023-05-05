import {combineReducers, createStore} from 'redux';
import counterReducer from './feature/Counter/counterReducer.js';
import headerReducer from './feature/header/title.js'


let rootReducers = combineReducers({
    counter: counterReducer,
    title: headerReducer
})

let store = createStore(rootReducers)

export default store