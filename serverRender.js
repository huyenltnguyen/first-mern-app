// jshint ignore: start
// fetch data from api
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import config from './config';
import App  from './src/components/App';

const getApiUrl = (contestId) => {
	return contestId ? `${config.serverUrl}/api/contests/${contestId}` : `${config.serverUrl}/api/contests`;
};

const getInitialData = (contestId, apiData) => {
	if (contestId) {
		return {
			currentContestId: apiData.id,
			contests: {
				[apiData.id]: apiData
			}
		};
	}

	return {
		contests: apiData.contests
	};
};

const serverRender = (contestId, apiData) => {
	return axios.get(getApiUrl(contestId))
		.then((res) => {
			const initialData = getInitialData(contestId, res.data)
			return {
				initialMarkup: ReactDOMServer.renderToString(
					<App initialData={ initialData } />
				),
				initialData: initialData
			};
		})
		.catch((err) => console.log(err));
};

export default serverRender;