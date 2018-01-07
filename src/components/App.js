// jshint ignore: start
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import ContestDetail from './ContestDetail';
import * as api from '../api';

const pushState = (obj, url) => {
	window.history.pushState(obj, '', url);
};

class App extends React.Component {
	static propTypes = {
		initialData: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
		this.state = this.props.initialData;
	}

	fetchContest = (contestId) => {
		pushState(
			{ currentContestId: contestId },
			`/contest/${contestId}`
		);

		api.fetchContest(contestId)
			.then((contest) => {
				this.setState({
					currentContestId: contest.id,
					contests: {
						...this.state.contests,
						[contest.id]: contest
					}
				});
			})
			.catch((err) => console.log(err));
	}

	fetchContestList = () => {
		pushState(
			{ currentContestId: null },
			'/'
		);

		api.fetchContestList()
			.then((contests) => {
				this.setState({
					currentContestId: null,
					contests
				});
			})
			.catch((err) => console.log(err));
	}

	pageHeader = () => {
		return this.state.currentContestId ? this.getCurrentContest().contestName : 'Naming Contests';
	}

	getCurrentContest = () => {
		return this.state.contests[this.state.currentContestId];
	}

	currentContent = () => {
		if (this.state.currentContestId) {
			return <ContestDetail
							onContestListClick={ this.fetchContestList }
							{ ...this.getCurrentContest() } />
		}

		return (
			<ContestList
				onContestClick={ this.fetchContest }
				contests={ this.state.contests } />
		);
	}

	onPopState = (handler) => {
		window.onpopstate = handler;
	}

	componentDidMount() {
		this.onPopState((event) => {
			this.setState({
				currentContestId: (event.state || {}).currentContestId
			});
		});
	}

	componentWillUnmount() {
		this.onPopState(null);
	}

	render() {
		return (
			<div className="App text-center">
				<Header message={ this.pageHeader() } />
				{ this.currentContent() }
			</div>
		);
	}
};

export default App;
