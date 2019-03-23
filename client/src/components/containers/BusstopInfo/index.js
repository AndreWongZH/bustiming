import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Button,
	Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Busservice from './Busservice';
import {
	saveBusstop,
	removeBusstop,
	setCurrentPage,
} from '../../../store/actions';

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

class BusstopInfo extends Component {
	constructor () {
		super();
		this.state = { savedBookmark: false };
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount () {
		const {
			setCurrentPage,
			history,
			location,
			savedBusstop,
		} = this.props;
		setCurrentPage(history.location.pathname);

		// this is to check if busstopcode is already bookmarked
		// this.props.location.state is redirected from /search
		if (location.state !== undefined) {
			this.setState({ savedBookmark: savedBusstop.includes(location.state.referrer) });
		}
	}

	handleClick () {
		const { savedBookmark } = this.state;
		const {
			busInfoPage,
			removeBusstop,
			saveBusstop,
		} = this.props;

		if (savedBookmark) {
			removeBusstop(busInfoPage.number);
			this.setState({ savedBookmark: false });
		} else {
			saveBusstop(busInfoPage.number);
			this.setState({ savedBookmark: true });
		}
	}

	render () {
		const { savedBookmark } = this.state;
		const { busInfoPage } = this.props;
		const {
			number,
			data,
		} = busInfoPage;

		return (
			<CenteredDiv>
				<StyledDiv>
					<h1>Bus Stop #{number}</h1>
					<StyledIcon name={ savedBookmark ? 'star' : 'star outline'} color='yellow' size='big' onClick={this.handleClick} />
				</StyledDiv>
				<StyledBody>
					<Busservice data={data} />
				</StyledBody>
				<Link to='/search'>
					<StyledButton>
						<Button>Search Another</Button>
					</StyledButton>
				</Link>
			</CenteredDiv>
		);
	}
}

const matchStateToProps = state => {
	return {
		busInfoPage: state.busInfoPage,
		savedBusstop: state.savedBusstop,
	};
};

const matchDispatchToProps = dispatch => ({
	saveBusstop: (payload) => dispatch(saveBusstop(payload)),
	removeBusstop: (payload) => dispatch(removeBusstop(payload)),
	setCurrentPage: (payload) => dispatch(setCurrentPage(payload)),
});

export default connect(matchStateToProps, matchDispatchToProps)(BusstopInfo);