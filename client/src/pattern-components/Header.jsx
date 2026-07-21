import React, { Component } from "react";
import { InlineNotification } from "@carbon/react";
import "./patterns.scss";

class Header extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div className="cds--row pattern-description">
        <div className="cds--col-xs-12">
          <h1 className="pattern-title">{title}</h1>
          <InlineNotification
            kind="info"
            title=""
            subtitle={subtitle}
            hideCloseButton
            lowContrast
          />
        </div>
      </div>
    );
  }
}

export default Header;
