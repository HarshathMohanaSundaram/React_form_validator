import React, { useState } from 'react'
import './App.css'
import FormInput from './component/FormInput'

const App = () => {
  const [values,setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmpassword:""
  })

  const inputs=[
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"UserName",
      errorMessage:"UserName should be 3-16 characters and should not include any special characters!",
      label:"UserName",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required:true
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be valid email address!",
      label:"Email",
      required:true
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      label:"Birthday"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be 8-20 Characters and include 1 letter, 1 number, 1 special character!",
      label:"Password",
      pattern:"^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}",
      required:true
    },
    {
      id:5,
      name:"confirmpassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Passwords don't match",
      label:"Confirm Password",
      pattern:values.password,
      required:true
    },
    
  ]

  const handleChange = (e) =>{
    setValues({...values,[e.target.name] : e.target.value})
  }
  
  const handleSubmit = e =>{
    e.preventDefault();
  }

  console.log(values)
  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>Validation Form</h1>
        {
          inputs.map((input) =>{
            return(
              <FormInput 
              key={input.id} 
              {...input} 
              value={values[input.name]} 
              onChange={handleChange}
            /> 
            )
          })
        }
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
