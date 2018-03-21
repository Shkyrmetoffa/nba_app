import React, { Component } from 'react';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import Home from '../Home/home';

class Layout extends Component {
  state = {
    showNav: false
  };

  toggleSideNav = (action) => this.setState({
      showNav: action
  });

  render() {
    return (
      <div>
        <Header 
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSideNav(false)}
          onOpenNav={() => this.toggleSideNav(true)}
        />
        <Home />
        <Footer />   
      </div>
    )
  };
};

export default Layout;
