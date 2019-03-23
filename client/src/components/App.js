import React, { Component } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Homepage from './containers/Homepage';
import Search from './containers/Search';
import Bookmark from './containers/Bookmark';
import Heading from './containers/Heading';
import BusstopInfo from './containers/BusstopInfo';

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
            <Route path='/search' exact={true} component={Search} />
            <Route path='/busstopinfo' exact={true} component={BusstopInfo} />
            <Route path='/bookmark' exact={true} component={Bookmark} />
            <Route path='' exact={true} component={Homepage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
