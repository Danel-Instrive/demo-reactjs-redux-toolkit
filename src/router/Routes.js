import React from "react";
import { Routes as Routess, Route } from "react-router-dom";
import Home from "../view/home/Home";
import Starred from "../view/starred/Starred";
import SendEmail from "../view/sendEmail/SendEmail";
import Drafts from "../view/drafts/Drafts";

const Routes = () => {
  return (
    <Routess>
      <Route path="/" element={<Home />} />
      <Route path="/starred" element={<Starred />} />
      <Route path="/sendemail" element={<SendEmail />} />
      <Route path="/drafts" element={<Drafts />} />
    </Routess>
  );
};

export default Routes;
