//import config from "../config";
import  {configureStore} from "@reduxjs/toolkit"
import userSlice from "./auth_store"
const store=configureStore({
    reducer:{
        auth: userSlice,
    }
})
export default store