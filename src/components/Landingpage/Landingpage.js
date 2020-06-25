import React from "react";
import { withRouter } from "react-router";
import "../Styles/color.scss";
import "./Landingpage.scss";
import "../Styles/trans.scss";
import "../Styles/responsive.scss";
import Banner from "./Banner";
import Header from "./Header";
import Categories from "./Categories";
import Footer from "./Footer";
import Skills from "./Skills";
import OfferType from "./OfferType";
import DownloadApp from "./DownloadApp";

class Landingpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="wt-wrapper" className="wt-wrapper wt-haslayout">
        <div className="wt-contentwrapper">
          <Header />
          <Banner />
          <Categories />
          <OfferType />
          <DownloadApp />
          <Skills />
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(Landingpage);
