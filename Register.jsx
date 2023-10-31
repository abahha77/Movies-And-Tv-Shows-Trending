import { useState } from "react"
import Joi from 'joi';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


export default function Register()
{

    const[userData,setUserData]=useState({firstname:"",lastname:"",age:0,email:"",password:""});
    const[listErrors,setListErrors]=useState([]);
    const[Errors,setErrors]=useState([]);

    let navigate=useNavigate();
  
  function Change(e)
  {
    let changedValue=e.target.value;
    let newUser={...userData};
    console.log(changedValue)
    newUser[`${e.target.id}`]=changedValue;
    setUserData(newUser);
    console.log(newUser)
  }

  async function Register(event)
  {
    event.preventDefault();

     let schema= Joi.object({
      firstname:Joi.string().alphanum().required().min(3).max(10),
      lastname:Joi.string().alphanum().min(3).max(10).required(),
      age:Joi.number().required().min(18),
      email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password:Joi.string().pattern(/^[a-z0-9]{4,8}$/i).required()
    })

    let result=schema.validate(userData,{abortEarly:false});
    console.log(result)

    if(result.error)
    {
        setListErrors(result.error.details)
    }
    else
    {
      try
      {
        let {data}= await axios.post('http://localhost:3000/signup',userData)

        if(data.message==="Email already exists")
        {
           setErrors(data.message);
        }
        else
        {
          console.log("done")
          navigate('/Login');
        }
      }catch(error)
      {
        console.log("error",error)
      }
      
      }
  }
  console.log(Errors.length)

  return <>

    <div className=" mt-5 mx-auto w-75">

    <form onSubmit={Register}>

      {listErrors.map((err,idx)=>{return <div key={idx} className="alert alert-danger">{err.message}</div>})}

      {Errors.length==0?'':<div className="alert alert-danger">{Errors}</div>}

            <label htmlFor="firstname">First Name</label>
            <input onChange={Change} id="firstname" className="form-control my-3" type="text" placeholder="ahmed" required minLength={3} maxLength={10}></input>

            <label htmlFor="lastname">second Name</label>
            <input onChange={Change} id="lastname" className="form-control my-3" type="text" placeholder="khattab" required minLength={3} maxLength={10}></input>

            <label htmlFor="age">Age</label>
            <input onChange={Change} id="age" className="form-control my-3 text-white" type="number" required min={18} placeholder="age"></input>


            <label htmlFor="email">Email</label>
            <input onChange={Change} id="email" className="form-control my-3" type="text" placeholder="email" required></input>

            <label htmlFor="password">Password</label>
            <input onChange={Change} id="password" className="form-control my-3" type="password" placeholder="password"  required></input>

            <button  className="btn btn-outline-primary mt-3">Register</button>

        </form>
    </div>
      
    </>
}