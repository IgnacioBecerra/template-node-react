import React, { Component } from "react";
import {
  Content,
  Header,
  HeaderName,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
} from '@carbon/react';
import UIShellBody from "./UIShellBody";

import { Fade } from '@carbon/icons-react';

class UIShell extends Component {
  header = "Garage for Cloud Catalyst";
  menuTitle = "12 Design Pattern";
  menuItems = [
    "Display Form",
    "Validating Form",
    "Update Form",
    "Validating Form Wizard 1",
    "Validating Form Wizard 2",
    "Simple List",
    "Table List",
    "List to List",
    "Linked List",
    "Master Detail",
    "Create, Read, Update, Delete",
    "Search List",
    "Search Form"
  ];

  constructor(props) {
    super(props);
    this.state = {
      patternName: this.menuItems[0]
    };
  }

  onPatternSelection = label => {
    this.setState({ patternName: label });
  };

  renderSideNavItems = () => {
    return this.menuItems.map(label => this.renderSideNavItem(label));
  };

  renderSideNavItem = label => {
    return (
      <SideNavMenuItem href="# " isActive={label === this.state.patternName ? true : false} onClick={e => this.onPatternSelection(label)}>{label}</SideNavMenuItem>
    );
  };

  render() {
    return (
      <div>
        <Header aria-label="IBM Platform Name">
          <SkipToContent />
          <HeaderName href="#" prefix="IBM">
            {this.header}
          </HeaderName>
        </Header>
        <SideNav aria-label="Side navigation">
          <SideNavItems>
            <SideNavMenu
              defaultExpanded
              renderIcon={Fade}
              title={this.menuTitle}
            >
              {this.renderSideNavItems()}
            </SideNavMenu>
          </SideNavItems>
        </SideNav>
        <Content id="main-content"><UIShellBody patternName={this.state.patternName} /></Content>
      </div>
    );
  }
}

export default UIShell;
