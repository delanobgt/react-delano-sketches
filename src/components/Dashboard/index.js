import React, { Fragment } from "react";

import Shit from "../../res/images/shit.png";

export default () => {
  return (
    <Fragment>
      <section className="hero is-primary is-fullheight is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1
              className="title"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                src={Shit}
                alt=""
                style={{ height: "1.25em", marginRight: "0.25em" }}
              />{" "}
              Delano Sketches
            </h1>
            <h2 className="subtitle">An expression of Irvin's imagination</h2>
          </div>
        </div>
      </section>

      <div className="columns is-8 is-desktop" style={{ margin: "1em" }}>
        <div className="column is-one-quarter">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
              <div className="has-text-centered">
                <a
                  className="button is-primary is-medium is-fullwidth"
                  href="/fireSpark"
                  rel="noreferrer noopener"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
