import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
