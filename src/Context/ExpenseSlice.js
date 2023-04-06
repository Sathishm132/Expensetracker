import { createSlice } from "@reduxjs/toolkit";



const initialexpense = {expenses:[]}
const ExpenseSlice = createSlice({
  name: "expenses",
  initialState: initialexpense,
  reducers: {
    getexpense(state,action){
      state.expenses=action.payload

    },
   addexpense(state, action) {

      
             
         
       
  
    state.expenses=state.expenses.concat(action.payload);
              
             
    },
    deleteexpense(state,action) {
    state.expenses= state.expenses.filter((item)=>item.id!==action.payload);
    
    },
    editexpense(state,action) {
      let editindex=state.expenses.findIndex((item)=>item.id===action.payload.id)
      state.expenses[editindex]=action.payload
      
    },
  },
});

export const ExpenseAction = ExpenseSlice.actions;
export default ExpenseSlice
