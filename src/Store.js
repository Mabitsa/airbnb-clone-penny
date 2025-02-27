import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {listingListReducer, listingListReducers} from "../src/reducers/listingReducers";
import { modalReducer } from "./reducers/modalReducer";

const reducer = combineReducers({ listingList: listingListReducer, modal: modalReducer });

const initialState = {};

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;