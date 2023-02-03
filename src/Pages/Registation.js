import React,{useState} from 'react';
//import React, { useState,useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
import {Alert} from 'react-bootstrap';

const Registation = () => {

    const [Username,setUsername] = useState('');
    const [Password,setPassword] = useState('');
    const [FirstName,setFirstName] =  useState('');
    const [LastName,setLastName] =  useState('');
    const [City,setCity] =  useState('');
    const [State,setState] = useState('');
    const [Gender,setGender] =  useState('');
    const [Email,setEmail] =  useState('');
    const [Country,setCountry] =  useState('');
    const [flag,setFlag] = useState(false);
   // const [login,setlogin] = useState(true);



  function handleclick (e) {

            if(!Username || !Password || !FirstName || 
              !Email || !LastName || !City || !State ||
              !Gender||  !Country )
              {

                  setFlag(false);

              }
              else
            {
                    
                  localStorage.setItem("Username",JSON.stringify(Username))
                  localStorage.setItem("Password",JSON.stringify(Password))
                  localStorage.setItem("FirstName",JSON.stringify(FirstName))
                  localStorage.setItem("LastName",JSON.stringify(LastName))
                  localStorage.setItem("Email",JSON.stringify(Email))
                  localStorage.setItem("City",JSON.stringify(City))
                  localStorage.setItem("State",JSON.stringify(State))
                  localStorage.setItem("Country",JSON.stringify(Country))
                  localStorage.setItem("Gender",JSON.stringify(Gender))
                    console.log("Saved In Local Storage");


            }









    }



   



    return (
      <>
        <div className="form__container d-flex felx-column align-items-center justify-content-center">
          <form>
            <h4 className="form__heading">Registation Page</h4>
            <hr />
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="Username" name="Username"
                 onChange={(event) => setUsername(event.target.value)}  />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="Password"  name="Password"  onChange={(event)=> setPassword(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="FirstName" className="form-label">
                FirstName
              </label>
              <input
                type="text"
                className="form-control"
                id="FirstName" name="FirstName" onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="LastName" className="form-label">
                LastName
              </label>
              <input
                type="text"
                className="form-control"
                id="LastName"   name="LastName" onChange={(event) => setLastName(event.target.value)}
              />
              </div>
              <div className="mb-3">
              <label htmlFor="City" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="City" name="City" onChange={(event) => setCity(event.target.value)}
              />
              </div>
              <div className="mb-3">
              <label htmlFor="State" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="State" name="State" onChange={(event) => setState(event.target.value)}
              />
              <div className="mb-3">
              <label htmlFor="Gender" className="form-label">
                Gender
              </label>
              <input
                type="text"
                className="form-control"
                id="Gender" name="Gender" onChange={(event) => setGender(event.target.value)}
              />
              </div>
              </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="Email" name="Email" onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Country" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="Country" name="Country" onChange={(event) => setCountry(event.target.value)}
              />
            </div>
            
           
            <button type="submit" onClick={handleclick} className="form__button">
              Register
            </button>
            <button type="cancel" className="form__button">
              Cancel
            </button>
        {flag && (
            <Alert color="primary" variant="danger">
              Please Fill Every Fill


            </Alert>


        )}


          </form>
        </div>
        </>
    );
  };


export default Registation