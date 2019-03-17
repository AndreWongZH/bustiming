import React, { Component } from 'react';
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
	}

	render() {
		return (
			<CenteredDiv>
				<StyledDiv>
					<h1>Bookmarks</h1>
					<StyledBody>
						All Saved bus here.
					</StyledBody>
				</StyledDiv>
			</CenteredDiv>
		)
	}
}

export default Bookmark;