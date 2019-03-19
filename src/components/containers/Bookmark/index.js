import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Button,
	Icon
} from 'semantic-ui-react';
import styled from 'styled-components';

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

class Bookmark extends Component {
	constructor() {
		super();
		this.state = {
			busNumber: 0
		}
		this.handlesubmit = this.handlesubmit.bind(this);
	}

	handlesubmit(e) {
		console.log(this.props);
	}

	render() {
		const savedBusstopComponent = this.props.savedBusstop.map(busstop => (
			<div>
				<h1>{busstop.number}</h1>
			</div>
		))
		return (
			<CenteredDiv>
				<StyledDiv>
					<h1 onClick={this.handlesubmit}>Bookmarks</h1>
					<StyledBody>
						All Saved bus here.
						{savedBusstopComponent}
					</StyledBody>
				</StyledDiv>
			</CenteredDiv>
		)
	}
}

const matchStateToProps = state => {
	return { savedBusstop: state.savedBusstop }
};

export default connect(matchStateToProps, null)(Bookmark);