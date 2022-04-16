
import {combineReducers, createStore} from 'redux';
import {userReducer} from "./reducer";


const rootReducer = combineReducers({
    items: userReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;

