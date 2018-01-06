// jshint ignore: start
import React from 'react';
import PropTypes from 'prop-types';

class ContestDetail extends React.Component {
	render() {
		return (
			<h2>{ this.props.description }</h2>
		);
	}
}

ContestDetail.propTypes = {
	id: PropTypes.number,
	categoryName: PropTypes.string,
	contestName: PropTypes.string,
	description: PropTypes.string
};

export default ContestDetail;