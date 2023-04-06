import { configureStore,} from "@reduxjs/toolkit";
import ExpenseSlice from "./ExpenseSlice";


const store=configureStore({
    reducer:ExpenseSlice.reducer

})
export default store;