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
import { addArticle } from '../../../store/actions';

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
			busNumber: '',
			redirect: false,
			apiData: {}
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (e) => {
		this.setState({ busNumber: e.target.value })
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { busNumber } = this.state;
		this.props.addArticle({ busNumber });
		this.setState({ busNumber: '' });
		const BusstopData = await axios.get('http://localhost:5000/api/busNumber', {
			params: {
				busNumber
			}
		})
		if (BusstopData.status === 200) {
			this.setState({ redirect: true, apiData:BusstopData.data });
		}
	}

	render() {
		const element = this.props.articles.map(el => (
			<div>
				<h1>{el.busNumber}</h1>
			</div>
		))
		
		const { busNumber, redirect, apiData } = this.state;

		return (
			<CenteredDiv>
				{ redirect && (
					<Redirect
						push
						to={{
							pathname: '/search',
							state: { referrer: apiData }
						}}
					/>
				)}
				<StyledDiv onSubmit={this.handleSubmit}>
					<h1>Bus APP</h1>
					<Input
						focus
						placeholder='Enter bus stop number here'
						value={busNumber}
						onChange={this.handleChange}
					 />
					<br />
					<Button content='Submit' />
					{element}
				</StyledDiv>
			</CenteredDiv>
		)
	}
}

const mapStateToProps = (state) => {
	return { articles: state.articles };
};

const mapDispatchToProps = (dispatch) => {
	return {
		addArticle: (article) => dispatch(addArticle(article))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);