import React from "react";

export default function ContactMe() {
  return (
    <main>
      <div className="container py-2 px-5 mb-5">
        <div className="row">
          <section>
            <h1 className="title contact-me">Contact me</h1>
            <h3>
              Let's start collaborating today! Call me, send me an email, or
              find me on social media.
            </h3>
          </section>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-4 mt-3 mb-4">
            <div className="list-group">
              <div className="list-group-item list-group-item-action contact">
                My Contact Info
              </div>
              <div className="list-group-item list-group-item-action btn mt-2">
                Phone: (951) 941-5294
              </div>
              <a href="mailto:melindawinter42@gmail.com">
                <button
                  type="button"
                  className="list-group-item list-group-item-action btn mt-2"
                >
                  Email: melindawinter42@gmail.com
                </button>
              </a>
              <a
                href="http://www.linkedin.com/in/melinda-winter-34a25689"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="list-group-item list-group-item-action btn mt-2"
                >
                  LinkedIn: melinda-winter
                </button>
              </a>
              <a
                href="https://github.com/melindawinter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="list-group-item list-group-item-action btn mt-2"
                >
                  GitHub: melindawinter
                </button>
              </a>
              <a
                href="https://docs.google.com/document/d/1oJC-LI-GbrOvPxijc6FDW7pv4y-JiDHFJNNBRoLGXcc/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="list-group-item list-group-item-action btn mt-2"
                >
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
