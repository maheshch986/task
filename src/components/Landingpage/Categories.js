import React from "react";
import { withRouter } from "react-router";
import "../Styles/color.scss";
import "./Landingpage.scss";
import "../Styles/trans.scss";
import "../Styles/responsive.scss";

import cat1 from "../../assets/images/img-01.png";
import cat2 from "../../assets/images/cat1.png";
import cat3 from "../../assets/images/img-02.png";
import cat4 from "../../assets/images/img-03.png";
import cat5 from "../../assets/images/img-04.png";
import cat6 from "../../assets/images/img-05.png";
import cat7 from "../../assets/images/img-06.png";
import cat8 from "../../assets/images/img-07.png";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main id="wt-main" className="wt-main wt-haslayout">
        <section className="wt-haslayout wt-main-section">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
                <div className="wt-sectionhead wt-textcenter">
                  <div className="wt-sectiontitle">
                    <h2>Explore Categories</h2>
                    <span>Professional by categories</span>
                  </div>
                </div>
              </div>
              <div className="wt-categoryexpl">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 float-left">
                  <div className="wt-categorycontent">
                    <figure>
                      <img alt="image description" src={cat1} />
                    </figure>
                    <div className="wt-cattitle">
                      <h3>
                        <a href="javascrip:void(0);">Mobiles</a>
                      </h3>
                    </div>
                    <div className="wt-categoryslidup">
                      <p>
                        Consectetur adipisicing elitaed eiusmod tempor
                        incididuatna labore et dolore magna.
                      </p>
                      <a href="javascript:void(0);">
                        Explore <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 float-left">
                  <div className="wt-categorycontent">
                    <figure>
                      <img alt="image description" src={cat2} />
                    </figure>
                    <div className="wt-cattitle">
                      <h3>
                        <a href="javascrip:void(0);">Digital Marketing</a>
                      </h3>
                    </div>
                    <div className="wt-categoryslidup">
                      <p>
                        Consectetur adipisicing elitaed eiusmod tempor
                        incididuatna labore et dolore magna.
                      </p>
                      <a href="javascript:void(0);">
                        Explore <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 float-left">
                  <div className="wt-categorycontent">
                    <figure>
                      <img alt="image description" src={cat3} />
                    </figure>
                    <div className="wt-cattitle">
                      <h3>
                        <a href="javascrip:void(0);">
                          Writing &amp; Translation
                        </a>
                      </h3>
                    </div>
                    <div className="wt-categoryslidup">
                      <p>
                        Consectetur adipisicing elitaed eiusmod tempor
                        incididuatna labore et dolore magna.
                      </p>
                      <a href="javascript:void(0);">
                        Explore <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 float-left">
                  <div className="wt-categorycontent">
                    <figure>
                      <img alt="image description" src={cat4} />
                    </figure>
                    <div className="wt-cattitle">
                      <h3>
                        <a href="javascrip:void(0);">Video &amp; Animation</a>
                      </h3>
                    </div>
                    <div className="wt-categoryslidup">
                      <p>
                        Consectetur adipisicing elitaed eiusmod tempor
                        incididuatna labore et dolore magna.
                      </p>
                      <a href="javascript:void(0);">
                        Explore <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 float-left">
                  <div className="wt-categorycontent">
                    <figure>
                      <img alt="image description" src={cat5} />
                    </figure>
                    <div className="wt-cattitle">
                      <h3>
                        <a href="javascrip:void(0);">Music &amp; Audio</a>
                      </h3>
                    </div>
                    <div className="wt-categoryslidup">
                      <p>
                        Consectetur adipisicing elitaed eiusmod tempor
                        incididuatna labore et dolore magna.
                      </p>
                      <a href="javascript:void(0);">
                        Explore <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 float-left">
                  <div className="wt-categorycontent">
                    <figure>
                      <img alt="image description" src={cat6} />
                    </figure>
                    <div className="wt-cattitle">
                      <h3>
                        <a href="javascrip:void(0);">Programming &amp; Tech</a>
                      </h3>
                    </div>
                    <div className="wt-categoryslidup">
                      <p>
                        Consectetur adipisicing elitaed eiusmod tempor
                        incididuatna labore et dolore magna.
                      </p>
                      <a href="javascript:void(0);">
                        Explore <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 float-left">
                  <div className="wt-categorycontent">
                    <figure>
                      <img alt="image description" src={cat7} />
                    </figure>
                    <div className="wt-cattitle">
                      <h3>
                        <a href="javascrip:void(0);">Business</a>
                      </h3>
                    </div>
                    <div className="wt-categoryslidup">
                      <p>
                        Consectetur adipisicing elitaed eiusmod tempor
                        incididuatna labore et dolore magna.
                      </p>
                      <a href="javascript:void(0);">
                        Explore <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 float-left">
                  <div className="wt-categorycontent">
                    <figure>
                      <img alt="image description" src={cat8} />
                    </figure>
                    <div className="wt-cattitle">
                      <h3>
                        <a href="javascrip:void(0);">Fun &amp; Lifestyle</a>
                      </h3>
                    </div>
                    <div className="wt-categoryslidup">
                      <p>
                        Consectetur adipisicing elitaed eiusmod tempor
                        incididuatna labore et dolore magna.
                      </p>
                      <a href="javascript:void(0);">
                        Explore <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
                  <div className="wt-btnarea">
                    <a
                      href="javascript:void(0)"
                      className="wt-btn"
                      style={{ backgroundColor: "#ff5851", color: "white" }}
                    >
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default withRouter(Categories);
