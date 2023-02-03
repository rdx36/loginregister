import React, { createContext } from "react";
import { Routes, Route } from "react-router-dom";
//import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/LoginPage";
import Header from "./Components/Header";
import CardsDetails from "./Components/CardsDetails";
import Cards from "./Components/Cards";
import UsersList from "./Pages/UsersList";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Registation from "./Pages/Registation";
import Logout from "./Components/Logout";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Cards1 from "./Components/Cards1";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Registation />} />
        <Route path="/profile" element={<HomePage />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/cardsdetail/:id" element={<CardsDetails />} />
        <Route path="/cards1" element={<Cards1 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
