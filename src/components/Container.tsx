import React from "react";
import "./Container.css";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div id="main">{children}</div>;
};

export default Container;
