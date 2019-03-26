import React from 'react';
import styled from 'styled-components';
import { Card, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { getTimeDifference } from './function';

const StyledDiv = styled.div`
  margin: 30px 0;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
`;

const BusserviceCard = ({ service }) => {
  const dateNow = Date.now();
  const BusCards = Object.keys(service).map((key) => {
    if (key === 'NextBus' || key === 'NextBus2' || key === 'NextBus3') {
      const EstimatedArrival = service[key].EstimatedArrival
        ? service[key].EstimatedArrival
        : 'No Data';
      const EndStop = service[key].DestinationCode
        ? service[key].DestinationCode
        : 'No Data';
      const BusRank = key.slice(-1) === 's' ? '1' : key.slice(-1);
      const { seconds, minutes } = getTimeDifference(EstimatedArrival, dateNow);
      const message = minutes
        ? `Arriving in: ${minutes} ${
            minutes === 1 ? 'Minute' : 'Mintues'
          } and ${seconds} ${seconds === 1 ? 'Second' : 'Seconds'}`
        : 'No Data';
      return (
        <Card key={key}>
          <Card.Content>
            <Card.Header>Bus {BusRank}</Card.Header>
            <Card.Description>{message}</Card.Description>
            <Card.Description>Ends at bus-stop: {EndStop}</Card.Description>
          </Card.Content>
        </Card>
      );
    }
    return null;
  });
  return (
    <StyledDiv>
      <Header as="h2">Bus Number: {service.ServiceNo}</Header>
      <Card.Group itemsPerRow={3}>{BusCards}</Card.Group>
    </StyledDiv>
  );
};

BusserviceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default BusserviceCard;
