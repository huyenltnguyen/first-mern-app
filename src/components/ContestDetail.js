// jshint ignore: start
import React from 'react';
import PropTypes from 'prop-types';

class ContestDetail extends React.Component {
	render() {
		return (
			<div className='ContestDetail'>
				<div className='contest-description'>
					{ this.props.description }
				</div>
				<a className='home-link' onClick={ this.props.onContestListClick }>Contest List</a>

			</div>
		);
	}
}

ContestDetail.propTypes = {
	id: PropTypes.number,
	categoryName: PropTypes.string,
	contestName: PropTypes.string,
	description: PropTypes.string,
	onContestListClick: PropTypes.func
};

export default ContestDetail;