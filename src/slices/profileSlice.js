import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user: (() => {
        try {
            return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
        } catch (e) {
            console.error("Error parsing user from localStorage", e);
            return null;
        }
    })(),
    loading:false,
}

const profileSlice =createSlice({
    name:"profile",
    initialState: initialState,
    reducers:{
        setUser(state,value){
            state.user=value.payload
            localStorage.setItem("user",JSON.stringify(value.payload));
        },
        setLoading(state,value){
            state.loading=value.payload
        },
    }
});

export const {setUser,setLoading}=profileSlice.actions;
export default profileSlice.reducer;