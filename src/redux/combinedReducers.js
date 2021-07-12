import { combineReducers } from "redux";
import { chatReducer } from "redux/reducers/chatReducer";

export const combinedReducers = combineReducers({
    chat: chatReducer,
});