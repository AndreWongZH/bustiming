import React, { Component } from 'react';
import {
	Button,
	Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Busservice from './Busservice';

const CenteredDiv = styled.div`
	padding: 1.5rem 0 2rem;
	padding-bottom: 500px;
	margin: 4rem auto;	
	width: 70%;
	border-style: solid;
	border-width: 3px;
	background-color: #F0F8FF;
`;

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-between;
	width: 40%;
	padding: 2rem;
	margin-left: 0;
`;

const StyledBody = styled.div`
	display: flex;
	padding: 10px;
	margin: 0 100px 0 10px;
	background-color: lightgreen;
	border-style: solid;
	border-width: 3px;
`;

const StyledIcon = styled(Icon)`
	float: right
`;

const StyledButton = styled.div`
	margin: 10px;
`;

class Search extends Component {
	constructor() {
		super();
		this.state = {
			busNumber: 0
		}
		this.handleClick = this.handleClick.bind(this);
	}


	handleClick(e) {
		console.log(this.props.location.state.referrer);
	}

	render() {
		const { BusStopCode, Services } = this.props.location.state.referrer;
		return (
			<CenteredDiv>
				<StyledDiv>
					<h1>Bus Stop #{BusStopCode}</h1>
					<StyledIcon name='star outline' size='big' onClick={this.handleClick} />
				</StyledDiv>
				<StyledBody>
					<Busservice data={Services} />
				</StyledBody>
				<Link to='/'>
					<StyledButton>
						<Button>Search Another</Button>
					</StyledButton>
				</Link>
			</CenteredDiv>
		)
	}
}

export default Search;