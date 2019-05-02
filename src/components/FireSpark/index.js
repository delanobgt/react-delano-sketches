import "./style.css";
import React from "react";
import P5Wrapper from "react-p5-wrapper";

import { Link } from "react-router-dom";

import sketch from "./sketch";

const styles = {
  backButton: {
    position: "fixed",
    top: "1em",
    left: "1em"
  }
};

export default () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        zIndex: "-5"
      }}
    >
      <Link
        to="/dashboard"
        class="button is-rounded is-large"
        style={styles.backButton}
      >
        <span class="icon is-large">
          <i class="fa fa-arrow-left" />
        </span>
      </Link>
      <P5Wrapper sketch={sketch} />
    </div>
  );
};
