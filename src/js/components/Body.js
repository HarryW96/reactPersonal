import React from "react";

import UniDetail from "./Body/UniDetail"
import Personal from "./Body/Personal"
import Icons from "./Body/Icons"

export default class Body extends React.Component {
  render() {
    return (
    	<div>
				<UniDetail />
				<Personal />
				<Icons />
			</div>
    );
  }
}
