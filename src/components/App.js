// jshint ignore: start
import React from 'react';
import { contests } from '../testData';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageHeader: 'Naming Contests'
		};
	}

	render() {
		return (
			<div className="App text-center">
				<Header message={ this.state.pageHeader } />
				<ContestPreview contests={ contests } />
			</div>
		);
	}
};

export default App;
