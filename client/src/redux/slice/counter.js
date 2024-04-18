
import {createSlice}  from '@reduxjs/toolkit';


const counterSlice = createSlice({
    name:"counter",
    initialState: 0,
    reducers:{
        add: (state)=>{
           return  state += 1
        },
        subtract(state){
           return  state -= 1
        },
        reset(state){
           return   state = 0
        },
        addByValue(state, action){
           return state += action.payload
        }
    }
});


export const {add, subtract, reset, addByValue} = counterSlice.actions;
export default counterSlice.reducer;