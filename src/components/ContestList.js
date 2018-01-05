// jshint ignore: start
import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = (props) => {
	return (
		<div className='ContestList'>
			<ul>
				{
					props.contests.map((contest) => {
						return (
							<ContestPreview
								key={ contest.id }
								id={ contest.id }
								categoryName={ contest.categoryName }
								contestName={ contest.contestName }
								onContestClick={ props.onContestClick } />
						);
					})
				}
			</ul>
		</div>
	);
};

ContestList.propTypes = {
	contests: PropTypes.array,
	onContestClick: PropTypes.func.isRequired
}

export default ContestList;