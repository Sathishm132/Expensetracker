import { createContext,  } from "react";

const Expenscontext=createContext({
    expenses:[],
    addexpense:()=>{},
    deleteexpense:()=>{},
    editExpense:()=>{}
})
export default Expenscontext;