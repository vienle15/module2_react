import React from "react";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

export const publicRouter = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/about",
    element: <About />,
    title: "About",
  },
  {
    path: "/contact",
    element: <Contact />,
    title: "Contact",
  },
];
