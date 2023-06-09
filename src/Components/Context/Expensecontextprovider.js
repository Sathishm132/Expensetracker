import React, { useEffect, useReducer } from 'react'
import axios from "axios"
import Expenscontext from './ExpenseContext'

const defaultvalue={
    expenses:[],
    editstatus:false,
    filter:{}

}
const expensereducer=(state,action)=>{
 
      
    
  
  if(action.type==="Delete"){
    let updatedexpense=state.expenses.filter((item)=>item.id!==action.id)
    axios.delete(`https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/expense/${action.id}/.json`)
    return{
      expenses:updatedexpense
    }
  }
  if(action.type==="Replace"){
    return {
      expenses:action.expenses
    }
  }
  if(action.type==="Add"){
    let addnew=action.expense
    let updatedexpenses=state.expenses.concat(addnew)

    axios.post(
      `https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json`,action.expense
     
    ).then((response)=>{
      addnew.id=response.data.name
     console.log(addnew)
    })

    return{expenses:updatedexpenses}
    
  }


}

const Expensecontextprovider = (props) => {
    const[expensestate,dispatch]=useReducer(expensereducer,defaultvalue);
   
    useEffect(() => {
      const fetch = async () => {
        const response = await axios.get(
          `https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json`
        );
        let fetchdata = [];
        for (let key in response.data) {
          fetchdata.push({ ...response.data[key], id: key });
        }
        
        dispatch({type:"Replace",expenses:fetchdata})
      
      };
      fetch();
      
      
    }, []);
    const adexpensehandler=(newexpense)=>{
      dispatch({type:"Add" ,expense:newexpense})
    }
    const deleteexpensehandler=(id)=>{
      console.log("delete")
      dispatch({type:"Delete",id:id})
    }
    const editexpensehandler=(id)=>{
      dispatch({type:"edit",id:id});
    }
    const contextvalue={
        expenses:expensestate.expenses,
        addexpense:adexpensehandler,
        deleteexpense:deleteexpensehandler,
        editexpense:editexpensehandler,
        editstatus:expensestate.editstatus,
        filter:expensestate.filter
    }
  return (
    <Expenscontext.Provider value={contextvalue}>{props.children}</Expenscontext.Provider>
  )
}

export default Expensecontextprovider