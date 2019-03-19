import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import {
	Input,
	Button,
	Form
} from 'semantic-ui-react';
import styled from 'styled-components';
import { currentBusstop } from '../../../store/actions';

const CenteredDiv = styled.div`
	padding: 1.5rem 0 2rem;
	margin: 4rem auto;	
	width: 40%;
	border-style: solid;
	border-width: 3px;
	background-color: #F0F8FF;
`;

const StyledDiv = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 2rem;
	margin: 10px auto;
`;

class Homepage extends Component {
	constructor() {
		super();
		this.state = {
			busstopNumber: '',
			redirect: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (e) => {
		this.setState({ busstopNumber: e.target.value })
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { busstopNumber } = this.state;
		const { currentBusstop } = this.props;

		
		const BusstopData = await axios.get('http://localhost:5000/api/busstopNumber', {
			params: {
				busstopNumber
			}
		})
		const sendData = await {
			number: busstopNumber,
			data: BusstopData.data
		}
		currentBusstop(sendData);
		await this.setState({ busstopNumber: '' });
		if (BusstopData.status === 200) {
			this.setState({ redirect: true });
		}		
	}

	render() {
		// const element = this.props.articles.map(el => (
		// 	<div>
		// 		<h1>{el.busstopNumber}</h1>
		// 	</div>
		// ))
		
		const { busstopNumber, redirect } = this.state;

		return (
			<CenteredDiv>
				{ redirect && (
					<Redirect
						push
						to={{
							pathname: '/search'
						}}
					/>
				)}
				<StyledDiv onSubmit={this.handleSubmit}>
					<h1>Bus APP</h1>
					<Input
						focus
						placeholder='Enter bus stop number here'
						value={busstopNumber}
						onChange={this.handleChange}
					 />
					<br />
					<Button content='Submit' />
				</StyledDiv>
			</CenteredDiv>
		)
	}
}

const matchDispatchToProps = dispatch => ({
	currentBusstop: (payload) => dispatch(currentBusstop(payload))
})

export default connect(null, matchDispatchToProps)(Homepage);