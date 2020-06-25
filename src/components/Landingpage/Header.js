import React from "react";
import { withRouter } from "react-router";
import "../Styles/color.scss";
import "./Landingpage.scss";
import "../Styles/trans.scss";
import "../Styles/responsive.scss";

import logo from "../../assets/images/logo.png";

import login from "../../assets/images/user-login.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header id="wt-header" className="wt-header wt-haslayout">
        <div className="wt-navigationarea">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <strong className="wt-logo">
                  <img alt="" src={logo} />
                </strong>
                <div className="wt-rightarea">
                  <nav id="wt-nav" className="wt-nav navbar-expand-lg">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i className="lnr lnr-menu"></i>
                    </button>
                    <div
                      className="collapse navbar-collapse wt-navigation"
                      id="navbarNav"
                    >
                      <ul className="navbar-nav">
                        <li className="menu-item-has-children page_item_has_children">
                          <span className="wt-dropdowarrow">
                            <i className="lnr lnr-chevron-right"></i>
                          </span>
                          <a href="javascript:void(0);">Main</a>
                          <ul className="sub-menu">
                            <li className="menu-item-has-children page_item_has_children wt-notificationicon">
                              <span className="wt-dropdowarrow">
                                <i className="lnr lnr-chevron-right"></i>
                              </span>
                              <span className="wt-dropdowarrow">
                                <i className="lnr lnr-chevron-right"></i>
                              </span>
                              <a href="javascript:void(0);">Home</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="index.html">Home v1</a>
                                </li>
                                <li className="wt-newnoti">
                                  <a href="indexvtwo.html">
                                    Home v2<em>without login</em>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children page_item_has_children">
                              <span className="wt-dropdowarrow">
                                <i className="lnr lnr-chevron-right"></i>
                              </span>
                              <span className="wt-dropdowarrow">
                                <i className="lnr lnr-chevron-right"></i>
                              </span>
                              <a href="javascript:void(0);">Article</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="articlelist.html">Article List</a>
                                </li>
                                <li>
                                  <a href="articlegrid.html">Article Grid</a>
                                </li>
                                <li>
                                  <a href="articlesingle.html">
                                    Article Single
                                  </a>
                                </li>
                                <li>
                                  <a href="articleclassNameic.html">
                                    Article classNameic
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children page_item_has_children">
                              <span className="wt-dropdowarrow">
                                <i className="lnr lnr-chevron-right"></i>
                              </span>
                              <span className="wt-dropdowarrow">
                                <i className="lnr lnr-chevron-right"></i>
                              </span>
                              <a href="javascript:void(0);">Company</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="companygrid.html">Company Grid</a>
                                </li>
                                <li>
                                  <a href="companysigle.html">Company Sigle</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="about.html">About</a>
                            </li>
                            <li>
                              <a href="privacypolicy.html">Privacy Policy</a>
                            </li>
                            <li>
                              <a href="comingsoon.html">Coming Soon</a>
                            </li>
                            <li>
                              <a href="404page.html">404page</a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a href="howitworks.html">How It Works</a>
                        </li>
                        <li className="menu-item-has-children page_item_has_children">
                          <span className="wt-dropdowarrow">
                            <i className="lnr lnr-chevron-right"></i>
                          </span>
                          <a href="javascript:void(0);">Browse Jobs</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="joblisting.html">Job Listing</a>
                            </li>
                            <li className="current-menu-item">
                              <a href="jobsingle.html">Job Single</a>
                            </li>
                            <li>
                              <a href="jobproposal.html">Job Proposal</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children page_item_has_children">
                          <span className="wt-dropdowarrow">
                            <i className="lnr lnr-chevron-right"></i>
                          </span>
                          <a href="javascript:void(0);">View Freelancers</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="userlisting.html">User Listing</a>
                            </li>
                            <li className="current-menu-item">
                              <a href="usersingle.html">User Single</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <div className="wt-loginarea">
                    <figure className="wt-userimg">
                      <img alt="image description" src={login} />
                    </figure>
                    <div className="wt-loginoption">
                      <a
                        href="javascript:void(0);"
                        id="wt-loginbtn"
                        className="wt-loginbtn"
                      >
                        Login
                      </a>
                      <div className="wt-loginformhold">
                        <div className="wt-loginheader">
                          <span>Login</span>
                          <a href="javascript:;">
                            <i className="fa fa-times"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      href="register.html"
                      className="wt-btn"
                      style={{ backgroundColor: "#ff5851", color: "white" }}
                    >
                      Join Now
                    </a>
                  </div>
                  <div className="wt-userlogedin">
                    <div className="wt-username">
                      <h3>Louanne Mattioli</h3>
                      <span>Amento Tech</span>
                    </div>
                    <nav className="wt-usernav">
                      <ul>
                        <li className="menu-item-has-children page_item_has_children">
                          <a href="javascript:void(0);">
                            <span>Insights</span>
                          </a>
                          <ul className="sub-menu children">
                            <li>
                              <a href="dashboard-insights.html">Insights</a>
                            </li>
                            <li>
                              <a href="dashboard-insightsuser.html">
                                Insights User
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="dashboard-profile.html">
                            <span>My Profile</span>
                          </a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="javascript:void(0);">
                            <span>All Jobs</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="dashboard-completejobs.html">
                                Completed Jobs
                              </a>
                            </li>
                            <li>
                              <a href="dashboard-canceljobs.html">
                                Cancelled Jobs
                              </a>
                            </li>
                            <li>
                              <a href="dashboard-ongoingjob.html">
                                Ongoing Jobs
                              </a>
                            </li>
                            <li>
                              <a href="dashboard-ongoingsingle.html">
                                Ongoing Single
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="dashboard-managejobs.html">
                            <span>Manage Jobs</span>
                          </a>
                        </li>
                        <li className="wt-notificationicon menu-item-has-children">
                          <a href="javascript:void(0);">
                            <span>Messages</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="dashboard-messages.html">Messages</a>
                            </li>
                            <li>
                              <a href="dashboard-messages2.html">
                                Messages V 2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="dashboard-saveitems.html">
                            <span>My Saved Items</span>
                          </a>
                        </li>
                        <li>
                          <a href="dashboard-invocies.html">
                            <span>Invoices</span>
                          </a>
                        </li>
                        <li>
                          <a href="dashboard-category.html">
                            <span>Category</span>
                          </a>
                        </li>
                        <li>
                          <a href="dashboard-packages.html">
                            <span>Packages</span>
                          </a>
                        </li>
                        <li>
                          <a href="dashboard-proposals.html">
                            <span>Proposals</span>
                          </a>
                        </li>
                        <li>
                          <a href="dashboard-accountsettings.html">
                            <span>Account Settings</span>
                          </a>
                        </li>
                        <li>
                          <a href="dashboard-helpsupport.html">
                            <span>Help &amp; Support</span>
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <span>Logout</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
