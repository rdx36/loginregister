import React, { useState,useEffect } from "react";
// import { FaAlignCenter } from "react-icons/fa";
import { toast } from "react-toastify";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


const HomePage = () => {
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

 // const handleSubmit = (e) => {
   // e.preventDefault();
  //};



  const navigate = useNavigate();

      useEffect(()=>{ 

                  if (!localStorage.getItem('token')) {

                            navigate("/");


                  }


       },[])

  return (
    <>
    <form>
          Home Page:
          <button onClick={() => {
                localStorage.removeItem('token')
          }}> Logout </button>
          <NavLink to={`../cards`}>View Product </NavLink>


    </form>
      
      
    </>
  );
};

export default HomePage;
