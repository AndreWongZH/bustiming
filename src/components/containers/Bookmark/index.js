import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
	List
} from 'semantic-ui-react';
import styled from 'styled-components';
import { setCurrentPage, getBusstopData } from '../../../store/actions';

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
	flex-direction: column;
	padding: 2rem;
	margin-left: 0;
`;

const StyledBody = styled.div`
	display: flex;
	padding: 200px;
	margin: 0 100px 0 10px;
	background-color: lightgreen;
	border-style: solid;
	border-width: 3px;
`;

const StyledListContent = styled(List.Content)`
	font-size: 28px;
`;

class Bookmark extends Component {
	constructor() {
		super();
		this.state = {
			redirectTo: '',
			redirect: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.props.setCurrentPage(this.props.history.location.pathname)
	}

	handleClick = async (e) => {
		const { getBusstopData } = this.props;
		e.preventDefault();
		const busstopNumber = e.currentTarget.textContent
		await getBusstopData(busstopNumber)
		this.setState({ redirectTo: busstopNumber, redirect: true });
	}

	render() {
		const { redirectTo, redirect } = this.state;
		const savedBusstopComponent = this.props.savedBusstop.map(busstopNumber => (
			<List.Item key={busstopNumber} >
				<List.Icon name="bus" size="big"/>
				<StyledListContent onClick={this.handleClick} >{busstopNumber}</StyledListContent>
			</List.Item>
		))
		return (
			<CenteredDiv>
				{ redirect && (
					<Redirect
						push
						to={{
							pathname: '/busstopinfo',
							state: { referrer: redirectTo }
						}}
					/>
				)}
				<StyledDiv>
					<h1>Bookmarks</h1>
					<StyledBody>
						<List divided>
							{savedBusstopComponent}
						</List>
					</StyledBody>
				</StyledDiv>
			</CenteredDiv>
		)
	}
}

const matchStateToProps = state => {
	return { savedBusstop: state.savedBusstop, busInfoPage: state.busInfoPage }
};

const matchDispatchToProps = dispatch => ({
	setCurrentPage: (payload) => dispatch(setCurrentPage(payload)),
	getBusstopData: (busstopNumber) => dispatch(getBusstopData(busstopNumber))
})

export default connect(matchStateToProps, matchDispatchToProps)(Bookmark);