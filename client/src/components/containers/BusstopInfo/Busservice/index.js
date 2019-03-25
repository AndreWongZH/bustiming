import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BusserviceCard from '../../../Shared/BusserviceCard';

const StyledBusserviceCard = styled.div`
  width: 90%;
  margin: 30px;
`;

Busservice.propTypes = {
  data: PropTypes.array.isRequired,
};

const Busservice = ({ data }) => {
  const BusserviceCardComp = data.map((service) => (
    <BusserviceCard key={service.ServiceNo} service={service} />
  ));
  return <StyledBusserviceCard>{BusserviceCardComp}</StyledBusserviceCard>;
};

export default Busservice;
