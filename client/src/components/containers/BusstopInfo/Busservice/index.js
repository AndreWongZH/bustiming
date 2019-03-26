import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import BusserviceCard from '../../../Shared/BusserviceCard';

const Busservice = ({ data }) => {
  const BusserviceCardComp = data.map((service) => (
    <Grid.Row key={service.ServiceNo}>
      <Grid.Column>
        <BusserviceCard service={service} />
      </Grid.Column>
    </Grid.Row>
  ));
  return BusserviceCardComp;
};

Busservice.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Busservice;
