import React from 'react';
import styled from 'styled-components';
import { Card, Header, Segment } from 'semantic-ui-react';

const StyledCard = styled.div`
	margin: 30px 0;
`;

const BusserviceCard = ({ service }) => {
	const BusCards = Object.keys(service).map(key => {
		if (key === 'NextBus' || key === 'NextBus2' || key === 'NextBus3') {
			const EstimatedArrival = service[key].EstimatedArrival ? service[key].EstimatedArrival : 'No Data';
			const EndStop = service[key].DestinationCode ? service[key].DestinationCode : 'No Data';
			const BusRank = key.slice(-1) === 's' ? '1' : key.slice(-1);
			return(
				<Card key={key}>
					<Card.Content>
						<Card.Header>Bus {BusRank}</Card.Header>
						<Card.Description>
		          			Arriving at: {EstimatedArrival}
		        		</Card.Description>
						<Card.Description>
		          			Ends at bus-stop: {EndStop}
		        		</Card.Description>
					</Card.Content>
				</Card>
			)
		}
		return(null);
	})
	return (
		<StyledCard>
			<Header as='h2' attached='top'>Bus Number: {service.ServiceNo}</Header>
			<Segment attached>
				<Card.Group itemsPerRow={3}>
					{BusCards}
				</Card.Group>
			</Segment>
		</StyledCard>
	)
}

export default BusserviceCard;