import React, { Component } from 'react';
import {
  Responsive,
  Visibility,
  Segment,
} from 'semantic-ui-react';
import HeaderBar from '../../Shared/HeaderBar';

class Homepage extends Component {
  render () {
    const { children } = this.props;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <HeaderBar />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}

export default Homepage;