import { createSlice } from "@reduxjs/toolkit";

const initialState={
 status:false,
 userData:null,

}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
        },
        logOut:(state)=>{
            state.status=true;
            state.userData=null;
        }
    }
})

export const{login,logOut}=userSlice.actions;
export default userSlice.reducer;