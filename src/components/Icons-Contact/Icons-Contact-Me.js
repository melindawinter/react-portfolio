import React from "react";
import Icon from "./icon";

const ContactMeIcon = props => {
  return (
    <div style={props.style} className="text-center">
      <Icon
        href="https://github.com/melindawinter"
        alt="GitHub icon"
        iconPic="fab fa-github"
      />
      <Icon
        href="http://www.linkedin.com/in/melinda-winter-34a25689/"
        alt="Linked In icon"
        iconPic="fab fa-linkedin"
      />
      <Icon
        href="mailto:melindawinter42@gmail.com"
        alt="Email icon"
        iconPic="fas fa-envelope"
      />
      <Icon
        href="https://docs.google.com/document/d/1oJC-LI-GbrOvPxijc6FDW7pv4y-JiDHFJNNBRoLGXcc/edit?usp=sharing"
        alt="resume icon"
        iconPic="far fa-file"
      />
    </div>
  );
};

export default ContactMeIcon;
