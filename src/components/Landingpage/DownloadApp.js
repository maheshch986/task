import React from "react";
import { withRouter } from "react-router";
import "../Styles/color.scss";
import "./Landingpage.scss";
import "../Styles/trans.scss";
import "../Styles/responsive.scss";

import mobile from "../../assets/images/mobile-img.png";
import android from "../../assets/images/android.png";
import ios from "../../assets/images/ios.png";
class DownloadApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main id="wt-main" className="wt-main wt-haslayout">
        <section className="wt-haslayout wt-main-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 float-left">
                <figure className="wt-mobileimg">
                  <img alt="" src={mobile} />
                </figure>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 float-left">
                <div className="wt-experienceholder">
                  <div className="wt-sectionhead">
                    <div className="wt-sectiontitle">
                      <h2>Limitless Experience</h2>
                      <span>Roam Around With Your Business</span>
                    </div>
                    <div className="wt-description">
                      <p>
                        Dotem eiusmod tempor incune utnaem labore etdolore
                        maigna aliqua enim poskina ilukita ylokem lokateise
                        ination voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur lokaim urianewce.
                      </p>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborumed
                        perspiciatis.
                      </p>
                    </div>
                    <ul className="wt-appicon">
                      <li>
                        <a href="javascript:void(0)">
                          <figure>
                            <img alt="" src={android} />
                          </figure>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <figure>
                            <img alt="" src={ios} />
                          </figure>
                        </a>
                      </li>
                    </ul>
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

export default withRouter(DownloadApp);
