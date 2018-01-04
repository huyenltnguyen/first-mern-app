// jshint ignore: start
import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageHeader: 'Naming Contests',
			contests: this.props.initialContests
		};
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="App text-center">
				<Header message={ this.state.pageHeader } />
				<ContestPreview contests={ this.state.contests } />
			</div>
		);
	}
};

export default App;
