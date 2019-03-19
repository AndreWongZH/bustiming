import React, { Component } from 'react';
import { connect } from 'react-redux';

import Homepage from './containers/Homepage';
import Search from './containers/Search';
import Bookmark from './containers/Bookmark';
import Heading from './containers/Heading';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import styled from 'styled-components';

const StyledHeading = styled.div`
  background-color: #123456;
  padding: 0;
  margin: 0;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <StyledHeading>
            <Heading />
          </StyledHeading>
          <Switch>
            <Route path='/' exact={true} component={Homepage} />
            <Route path='/search' exact={true} component={Search} />
            <Route path='/bookmark' exact={true} component={Bookmark} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
