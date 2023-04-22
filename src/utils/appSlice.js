import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleMenu:(state)=>{
          state.isMenuOpen = ! state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false;  // here we are setting value as hardcoded false because we dont want sidebar on /watch page
        }
    }
})

export const {toggleMenu,closeMenu} = appSlice.actions;
export default appSlice.reducer;