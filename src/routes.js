import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../src/components/Layout/layout';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Layout} />      
      </Switch>
    );
  };
};

export default Routes;
