import React from "react";
import "./Title.css";

const Title = props => {
  return <h1 className="text-center mt-3 mb-4 title">{props.title}</h1>;
};

export default Title;
