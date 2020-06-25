import React from "react";
import { withRouter } from "react-router";
import "../Styles/color.scss";
import "./Landingpage.scss";
import "../Styles/trans.scss";
import "../Styles/responsive.scss";
class OfferType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main id="wt-main" className="wt-main wt-haslayout">
        <section className="wt-haslayout wt-main-section wt-paddingnull wt-companyinfohold">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="wt-companydetails">
                  <div className="wt-companycontent">
                    <div className="wt-companyinfotitle">
                      <h2>Start As Company</h2>
                    </div>
                    <div className="wt-description">
                      <p>
                        Consectetur adipisicing elit sed dotem eiusmod tempor
                        incune utnaem labore etdolore maigna aliqua enim poskina
                        ilukita ylokem lokateise ination voluptate velit esse
                        cillum.
                      </p>
                    </div>
                    <div className="wt-btnarea">
                      <a
                        href="javascript:void(0);"
                        className="wt-btn"
                        style={{
                          backgroundColor: "#ff5851",
                          color: "white",
                        }}
                      >
                        Join Now
                      </a>
                    </div>
                  </div>
                  <div className="wt-companycontent">
                    <div className="wt-companyinfotitle">
                      <h2>Start As Freelancer</h2>
                    </div>
                    <div className="wt-description">
                      <p>
                        Consectetur adipisicing elit sed dotem eiusmod tempor
                        incune utnaem labore etdolore maigna aliqua enim poskina
                        ilukita ylokem lokateise ination voluptate velit esse
                        cillum.
                      </p>
                    </div>
                    <div className="wt-btnarea">
                      <a
                        href="javascript:void(0);"
                        className="wt-btn"
                        style={{
                          backgroundColor: "#ff5851",
                          color: "white",
                        }}
                      >
                        Join Now
                      </a>
                    </div>
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

export default withRouter(OfferType);
