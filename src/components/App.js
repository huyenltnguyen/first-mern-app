// jshint ignore: start
import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

const pushState = (obj, url) => {
	window.history.pushState(obj, '', url);
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageHeader: 'Naming Contests',
			contests: this.props.initialContests
		};
	}

	fetchContest = (contestId) => {
		pushState(
			{ currentContestId: contestId },
			`/contest/${contestId}`
		)
	}

	render() {
		return (
			<div className="App text-center">
				<Header message={ this.state.pageHeader } />
				<ContestList
					onContestClick={ this.fetchContest }
					contests={ this.state.contests } />
			</div>
		);
	}
};

export default App;
