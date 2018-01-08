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
					currentContestId: contest._id,
					contests: {
						...this.state.contests,
						[contest._id]: contest
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
							fetchNames={ this.fetchNames }
							lookupName={ this.lookupName }
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

	fetchNames = (nameIds) => {
		if (nameIds.length === 0) {
			return;
		}

		api.fetchNames(nameIds)
			.then((names) => {
				this.setState({
					names
				});
			})
			.catch((err) => console.log(err));
	}

	lookupName = (nameId) => {
		if (!this.state.names || !this.state.names[nameId]) {
			return ({
				name: '...'
			});
		}

		return this.state.names[nameId];
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
