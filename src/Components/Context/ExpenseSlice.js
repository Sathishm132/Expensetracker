import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialexpense = {expenses:[]}
const ExpenseSlice = createSlice({
  name: "expenses",
  initialState: initialexpense,
  reducers: {
    addexpense(state, action) {
        console.log(state.expenses)
        state.expenses=[...state.expenses,action.payload]
         
         axios.post(
            `https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json`,action.payload
           
          ).then((response)=>{
              
         
              }) ;
             
    },
    deleteexpense(state,action) {
        state.expenses.filter((item)=>item.money===action.payload);
    axios.delete(`https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/expense/${action.id}/.json`)
    },
    editexpense() {},
  },
});

export const ExpenseAction = ExpenseSlice.actions;
export default ExpenseSlice
