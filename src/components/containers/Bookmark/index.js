import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	List
} from 'semantic-ui-react';
import styled from 'styled-components';
import { setCurrentPage } from '../../../store/actions';

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
			busNumber: 0
		}
		this.handlesubmit = this.handlesubmit.bind(this);
	}

	componentDidMount() {
		this.props.setCurrentPage(this.props.history.location.pathname)
	}

	handlesubmit(e) {
		console.log(this.props);
	}

	render() {
		const savedBusstopComponent = this.props.savedBusstop.map(busstop => (
			<List.Item>
				<List.Icon name="bus" size="big"/>
				<StyledListContent>{busstop.number}</StyledListContent>
			</List.Item>
		))
		return (
			<CenteredDiv>
				<StyledDiv>
					<h1 onClick={this.handlesubmit}>Bookmarks</h1>
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
	return { savedBusstop: state.savedBusstop }
};

const matchDispatchToProps = dispatch => ({
	setCurrentPage: (payload) => dispatch(setCurrentPage(payload))
})

export default connect(matchStateToProps, matchDispatchToProps)(Bookmark);