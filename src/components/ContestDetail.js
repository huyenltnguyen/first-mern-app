// jshint ignore: start
import React from 'react';
import PropTypes from 'prop-types';

class ContestDetail extends React.Component {
	componentDidMount() {
		this.props.fetchNames(this.props.nameIds);
	}

	render() {
		return (
			<div className='ContestDetail'>
				<div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Contest Description</h3>
          </div>
          <div className='panel-body'>
            <div className='contest-description'>
              {this.props.description}
            </div>
          </div>
        </div>

        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Proposed Names</h3>
          </div>
          <div className='panel-body'>
            <ul className='list-group'>
              {
              	this.props.nameIds.map((nameId) => {
              		return <li key={ nameId } className='list-group-item'>
              						{ this.props.lookupName(nameId).name }
          							</li>
              	})
              }
            </ul>
          </div>
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
	onContestListClick: PropTypes.func,
	fetchNames: PropTypes.func.isRequired,
	nameIds: PropTypes.array.isRequired,
	lookupName: PropTypes.func.isRequired
};

export default ContestDetail;