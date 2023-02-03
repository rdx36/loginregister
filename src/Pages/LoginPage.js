import React, { useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
import Home from './HomePage';
import Registation from "./Registation";
import axios from "axios";

const LoginPage = () => {

  const [username,setUsername1] = useState('');
  const [password,setPassword1] = useState('');
 
   // const [Home,setHome] = useState(true);
const navigate = useNavigate();

     

const handlelogin = (e) =>{
  e.preventDefault()
    console.log("username,password",username,password)
    axios.post('https://dummyjson.com/auth/login',{
                  username:username,
                  password:password
        
        })
        .then((response)=>{

              console.log(response.data)
              alert('Sucessfully login');
              localStorage.setItem('token',response.data.token)
              navigate("profile");



        })

            .catch((err)=>{
                console.log(err)
                console.log(err.response)
                alert(err.response.data.error.message)

            })


    
   






}  






//useEffect(()=>{
  //    if(localStorage.getItem('user-info')){
//
  //            useNavigate.push("/profile")
//



    //  }


//})

//const history = useHistory();
  // const handlesubmit =(e) => {
    //          e.preventDefault();
      //    const username = JSON.parse(localStorage.getItem("Username1"));
        //  const password = JSON.parse(localStorage.getItem("Password1"));
         // const username1 = JSON.parse(localStorage.getItem("Username"));
         // const password1 = JSON.parse(localStorage.getItem("Password"));

          //  console.log(Username1,Password1);
          //  console.log(username1,password1);



        //  if(username1 === Username1 && password1 === Password1 )
          //  {

            //     navigate("/profile");

            //}
           // else
             // {

               // alert("Wrong Username or password");

           // }
                
//};






  return (
    <>
      <div className="form__container d-flex felx-column align-items-center justify-content-center">
        <form>
          <h4 className="form__heading">User Management System </h4>
          <hr />
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="Username" name="Username1" onChange={(event) => setUsername1(event.target.value)}   
              aria-describedby="UsernameHelp" value={username}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password    
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1" name="Password1"   onChange={(event) => setPassword1(event.target.value)} 
           value={password} />
          </div>
          <div className="form__signupLink mb-3">
            <Link to ="/register" variant="body2">
                                Not have an acoount ? SignUp Here 


                        </Link>
          </div>
          <button type="submit" className="form__button" onClick={handlelogin}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
