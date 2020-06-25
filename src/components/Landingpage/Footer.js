import React from "react";
import { withRouter } from "react-router";
import "../Styles/color.scss";
import "./Landingpage.scss";
import "../Styles/trans.scss";
import "../Styles/responsive.scss";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer id="wt-footer" className="wt-footer wt-haslayout">
        <div className="wt-footerholder wt-haslayout">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="wt-footerlogohold">
                  <strong className="wt-logo">
                    <a href="index.html">
                      {/* <img src="images/flogo.png" alt="company logo here" /> */}
                    </a>
                  </strong>
                  <div className="wt-description">
                    <p>
                      Dotem eiusmod tempor incune utnaem labore etdolore maigna
                      aliqua enim poskina ilukita ylokem lokateise ination
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur lokaim urianewce{" "}
                      <a href="javascript:void(0);">more...</a>
                    </p>
                  </div>
                  <ul className="wt-socialiconssimple wt-socialiconfooter">
                    <li className="wt-facebook">
                      <a href="javascript:void(0);">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="wt-twitter">
                      <a href="javascript:void(0);">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="wt-youtube">
                      <a href="javascript:void(0);">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li className="wt-instagram">
                      <a href="javascript:void(0);">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="wt-googleplus">
                      <a href="javascript:void(0);">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="wt-footercol wt-widgetcompany">
                  <div className="wt-fwidgettitle">
                    <h3>Company</h3>
                  </div>
                  <ul className="wt-fwidgetcontent">
                    <li>
                      <a href="javascript:void(0);">About Us</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">How It Works</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Careers</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Trust &amp; Safety</a>
                    </li>
                    <li className="wt-viewmore">
                      <a href="javascript:void(0);">+ View All</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="wt-footercol wt-widgetexplore">
                  <div className="wt-fwidgettitle">
                    <h3>Explore More</h3>
                  </div>
                  <ul className="wt-fwidgetcontent">
                    <li>
                      <a href="javascript:void(0);">Freelancers in USA</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Freelancers in Canada</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Freelancers in Australia</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Jobs in USA</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Find Jobs</a>
                    </li>
                    <li className="wt-viewmore">
                      <a href="javascript:void(0);">+ View All</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wt-haslayout wt-joininfo">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 push-lg-1">
                <div className="wt-companyinfo">
                  <span>
                    <a href="javascript:void(0);">New @ Worktern?</a> Dotem
                    eiusmod tempor incune utnaem labore etdolore.
                  </span>
                </div>
                <div className="wt-fbtnarea">
                  <a
                    href="javascript:void(0)"
                    className="wt-btn"
                    style={{ backgroundColor: "#dc3545" }}
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wt-haslayout wt-footerbottom">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p className="wt-copyrights">
                  <span>Worktern.</span> © 2018 All Rights Reserved.
                </p>
                <nav className="wt-addnav">
                  <ul>
                    <li>
                      <a href="javascript:void(0);">News</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Career</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
