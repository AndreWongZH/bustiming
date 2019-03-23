import React from 'react';
import styled from 'styled-components';
import BusserviceCard from '../../../Shared/BusserviceCard';

const StyledBusserviceCard = styled.div`
	width: 90%;
	margin: 30px;
`;

const Busservice = ({ data }) => {
	const BusserviceCardComp = data.map(service => (
		<BusserviceCard key={service.ServiceNo} service={service} />
	));
	return (
		<StyledBusserviceCard>
			{BusserviceCardComp}
		</StyledBusserviceCard>
	);
};

export default Busservice;