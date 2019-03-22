import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import {
	Input,
	Button,
	Form
} from 'semantic-ui-react';
import styled from 'styled-components';
import { setCurrentPage, getBusstopData } from '../../../store/actions';

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

class Search extends Component {
	constructor() {
		super();
		this.state = {
			busstopNumber: '',
			redirect: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.setCurrentPage(this.props.history.location.pathname)
	}

	handleChange = (e) => {
		this.setState({ busstopNumber: e.target.value })
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { busstopNumber } = this.state;
		const { getBusstopData } = this.props;
		await getBusstopData(busstopNumber);
		await this.setState({ redirect: true });
		// might want to handle error here
		await this.setState({ busstopNumber: '' });
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
							pathname: '/busstopinfo',
							state: { referrer: busstopNumber }
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
	setCurrentPage: (payload) => dispatch(setCurrentPage(payload)),
	getBusstopData: (busstopNumber) => dispatch(getBusstopData(busstopNumber))
})

export default connect(null, matchDispatchToProps)(Search);