// jshint ignore: start
import React from 'react';
import PropTypes from 'prop-types';

class ContestPreview extends React.Component {
	handleClick = () => {
		this.props.onContestClick(this.props.id);
	}

	render() {
		return (
			<li className='ContestPreview' onClick={ this.handleClick }>
				<div className='category-name'>{ this.props.categoryName }</div>
				<div className='contest-name'>{ this.props.contestName }</div>
			</li>
		);
	}
}

ContestPreview.propTypes = {
	id: PropTypes.string.isRequired,
	categoryName: PropTypes.string.isRequired,
	contestName: PropTypes.string.isRequired,
	onContestClick: PropTypes.func.isRequired
};

export default ContestPreview;