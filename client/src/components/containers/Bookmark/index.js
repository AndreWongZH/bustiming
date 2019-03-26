import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Table, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { setCurrentPage, getBusstopData } from '../../../store/actions';
import BusstopNumberBookmark from './BusstopNumberBookmark';

const CenteredDiv = styled.div`
  padding: 1.5rem 0 2rem;
  padding-bottom: 500px;
  margin: 4rem auto;
  width: 70%;
  border-style: solid;
  border-width: 3px;
  background-color: #f0f8ff;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-left: 0;
`;

class Bookmark extends Component {
  constructor() {
    super();
    this.state = {
      redirectTo: '',
      redirect: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { setCurrentPage, history } = this.props;
    setCurrentPage(history.location.pathname);
  }

  handleClick = async (e) => {
    const { getBusstopData } = this.props;
    e.preventDefault();
    const busstopNumber = e.currentTarget.textContent;
    await getBusstopData(busstopNumber);
    this.setState({
      redirectTo: busstopNumber,
      redirect: true,
    });
  };

  render() {
    const { redirectTo, redirect } = this.state;
    return (
      <CenteredDiv>
        {redirect && (
          <Redirect
            push
            to={{
              pathname: '/busstopinfo',
              state: { referrer: redirectTo },
            }}
          />
        )}
        <StyledDiv>
          <h1>Bookmarks</h1>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <BusstopNumberBookmark handleClick={this.handleClick} />
              </Grid.Column>
              <Grid.Column>
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Bus Number</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>12345</Table.Cell>
                    </Table.Row>
                  </Table.Body>

                  <Table.Footer>
                    <Table.Row>
                      <Table.HeaderCell colSpan="2" />
                    </Table.Row>
                  </Table.Footer>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </StyledDiv>
      </CenteredDiv>
    );
  }
}

Bookmark.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  getBusstopData: PropTypes.func.isRequired,
};

const matchStateToProps = (state) => {
  return {
    busInfoPage: state.busInfoPage,
  };
};

const matchDispatchToProps = (dispatch) => ({
  setCurrentPage: (payload) => dispatch(setCurrentPage(payload)),
  getBusstopData: (busstopNumber) => dispatch(getBusstopData(busstopNumber)),
});

export default connect(
  matchStateToProps,
  matchDispatchToProps
)(Bookmark);
