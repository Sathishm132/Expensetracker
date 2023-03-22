import React from 'react'

const Validation = (value) => {
    let error={}
    const emailpattern=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const passwordpattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
    // if(value.email===""){
    //     error.email="email should not empty"
    // }
    // if(!value.email.test(emailpattern)){
    //     error.email="is not valid email"
    // }
    // if(value.password===""){
    //     error.password="must enter password"
    // }
    // if(!value.password.test(passwordpattern)){
    //     error.password="enter strong password"
    // }
     if(value.password!==value.confirmpassword){
       error.confirmpassword="enter correct pasword"
     }

    console.log(value)
    return error
}

export default Validation