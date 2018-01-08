// jshint ignore: start
import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = (props) => {
	const contests = props.contests;
	return (
		<div className='ContestList'>
			<ul>
				{
					Object.keys(contests).map((contestId) => {
						const contest = contests[contestId];
						return (
							<ContestPreview
								key={ contest._id }
								id={ contest._id }
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
	contests: PropTypes.object,
	onContestClick: PropTypes.func.isRequired
};

export default ContestList;