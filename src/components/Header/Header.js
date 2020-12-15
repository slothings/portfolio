import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const path = this.props.location.pathname.slice(1)
    const pathname = path.charAt(0).toUpperCase() + path.slice(1)
    return (
      <div>
        <h1 class="m-0 p-2 text-center text-white lavendar">{pathname}</h1>
      </div>
    );
  }
}

export default withRouter(Header);