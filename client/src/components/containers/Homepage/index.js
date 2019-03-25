import React, { Component } from 'react';
import { Responsive, Visibility, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import HeaderBar from '../../Shared/HeaderBar';

class Homepage extends Component {
  render() {
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
            textAlign="center"
            style={{
              minHeight: 700,
              padding: '1em 0em',
            }}
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

Homepage.propTypes = {
  children: PropTypes.node,
};

Homepage.defaultProps = {
  children: null,
};

export default Homepage;
