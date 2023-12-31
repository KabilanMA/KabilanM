import React, { CSSProperties, ReactNode } from "react";

import NavBar from "./NavBar";
import Home from "../pages/Home";
import About from "../pages/Education";
import Projects from "../pages/Projects";
import Biography from "../pages/Experience";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container-fluid default-background">
      <div className="row justify-content-center">
        <div className="col-md-8 mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Container;
