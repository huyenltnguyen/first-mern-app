// jshint ignore: start
// fetch data from api
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import config from './config';
import App  from './src/components/App';

const serverRender = () => {
	return axios.get(`${config.serverUrl}/api/contests`)
		.then((res) => {
			return {
				initialMarkup: ReactDOMServer.renderToString(
					<App initialContests={ res.data.contests } />
				),
				initialData: res.data
			};
		})
		.catch((err) => console.log(err));
};

export default serverRender;