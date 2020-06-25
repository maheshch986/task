import React from "react";
import { withRouter } from "react-router";
import "../Styles/color.scss";
import "./Landingpage.scss";
import "../Styles/trans.scss";
import "../Styles/responsive.scss";
import bg1 from "../../assets/images/bg1.png";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wt-haslayout wt-bannerholder">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5">
              <div className="wt-bannerimages">
                <figure className="wt-bannermanimg" data-tilt="">
                  <img alt="" src={bg1} />
                  {/* <img alt="" src={bg2} /> */}

                  {/* <img alt="" src={bg3} /> */}
                </figure>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              <div className="wt-bannercontent">
                <div className="wt-bannerhead">
                  <div className="wt-title">
                    <h1>
                      <span>Hire expert freelancers</span> for any job, Online
                    </h1>
                  </div>
                  <div className="wt-description">
                    <p>
                      Consectetur adipisicing elit sed dotem eiusmod tempor
                      incuntes ut labore etdolore maigna aliqua enim.
                    </p>
                  </div>
                </div>
                <form className="wt-formtheme wt-formbanner">
                  <fieldset>
                    <div className="form-group">
                      <input
                        type="text"
                        name="fullname"
                        className="form-control"
                        placeholder="I’m looking for"
                      />
                      <div className="wt-formoptions">
                        <a href="userlisting.html" className="wt-searchbtn">
                          <i className="lnr lnr-magnifier"></i>
                        </a>
                      </div>
                    </div>
                  </fieldset>
                </form>
                <div className="wt-videoholder">
                  <div className="wt-videoshow">
                    <a
                      data-rel="prettyPhoto[video]"
                      href="https://www.youtube.com/watch?v=J37W6DjqT3Q"
                      rel="prettyPhoto[video]"
                      target="blank"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  <div className="wt-videocontent">
                    <span>
                      See For Yourself!
                      <em>How it works &amp; experience the ultimate joy.</em>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Banner);
