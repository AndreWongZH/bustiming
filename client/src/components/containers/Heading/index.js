import React, { Component } from 'react';
import {
  Responsive,
  Visibility,
  Menu,
  Container,
  Button,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Heading extends Component {
  constructor () {
    super();
    this.state = {};
  }
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render () {
    const {
      children,
      currentPage,
      busInfoPage,
    } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
          >
            <Container>
              <Link to='/search'>
                <Menu.Item as='div' active={currentPage === '/search'}>Search</Menu.Item>
              </Link>
              <Link to='/bookmark'>
                <Menu.Item as='div' active={currentPage === '/bookmark'}>Bookmarks</Menu.Item>
              </Link>
              { busInfoPage.number !== '' && (
                <Link to='/busstopinfo'>
                  <Menu.Item as='div' active={currentPage === '/busstopinfo'}>Bus-Stop Info</Menu.Item>
                </Link>
              )}
              <Menu.Item position='right'>
                <Button as='a' inverted={!fixed}>Log in</Button>
                <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
              </Menu.Item>
            </Container>
          </Menu>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage,
    busInfoPage: state.busInfoPage,
  };
};

export default connect(mapStateToProps, null)(Heading);