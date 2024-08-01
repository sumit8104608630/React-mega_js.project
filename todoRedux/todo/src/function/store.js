import {configureStore} from"@reduxjs/toolkit";
import todoReducer from "./index"
export const store=configureStore({
    reducer:todoReducer
});