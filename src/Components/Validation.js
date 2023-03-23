import React from 'react'

const Validation = (value) => {
    let error={}
    const emailpattern=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const passwordpattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/ ;
    let text = "The best things in life are free"; let pattern = /e/;
    let result = emailpattern.test(value.email);
    if(value.email===""){
        error.email="email should not empty"
    }
    
    if(!emailpattern.test(value.email)){
        error.email="is not valid email"
    }
    if(value.password===""){
        error.password="must enter password"
    }
    if(!value.password.match(passwordpattern)){
        error.password="enter strong password"
    }
     if(value.password!==value.confirmpassword){
       error.confirmpassword="Pasword does not match"
      
     }

    
    return error
}

export default Validation