import axios from 'axios';

export const fetchContest = (contestId) => {
	return axios.get(`/api/contests/${contestId}`)
		.then((res) => res.data)
		.catch((err) => console.log(err));
};

export const fetchContestList = () => {
	return axios.get(`/api/contests`)
		.then((res) => res.data.contests)
		.catch((err) => console.log(err));
};