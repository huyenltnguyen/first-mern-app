// jshint ignore: start
import React from 'react';

const ContestPreview = (props) => {
	return (
		<div className='ContestPreview'>
			{
				props.contests.map((contest) => {
					return (
						<ul>
							<li key={ contest.id }>
								<div className='category-name'>{ contest.categoryName }</div>
								<div className='contest-name'>{ contest.contestName }</div>
							</li>
						</ul>
					);
				})
			}
		</div>
	);
};

export default ContestPreview;