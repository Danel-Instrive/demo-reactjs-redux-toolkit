import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../view/home/Home";
import Starred from "../view/starred/Starred";
import SendEmail from "../view/sendEmail/SendEmail";
import Drafts from "../view/drafts/Drafts";

const Routes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "starred",
          element: <Starred />,
        },
        { path: "sendemail", element: <SendEmail /> },
        { path: "drafts", element: <Drafts /> },
      ],
    },
  ]);

  return element;
};

export default Routes;
