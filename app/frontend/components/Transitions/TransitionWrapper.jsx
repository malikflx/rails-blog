import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./TransitionWrapper.css";

const TransitionWrapper = ({ location, children }) => {
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} timeout={300} classNames="fade">
        <div className="transition-wrapper">{children}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionWrapper;