import React from 'react';
import { connect } from 'react-redux';
import { Table, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const BusstopNumberBookmark = ({ savedBusstop, handleClick }) => {
  const savedBusstopComponent = savedBusstop.map((busstopNumber) => (
    <Table.Row key={busstopNumber}>
      <Table.Cell onClick={handleClick}>
        <Icon name="bus" size="big" />
        {busstopNumber}
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <React.Fragment>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Bus-stop Number</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{savedBusstopComponent}</Table.Body>
      </Table>
    </React.Fragment>
  );
};

BusstopNumberBookmark.propTypes = {
  savedBusstop: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

const matchStateToProps = (state) => {
  return {
    savedBusstop: state.savedBusstop,
  };
};

export default connect(
  matchStateToProps,
  null
)(BusstopNumberBookmark);
