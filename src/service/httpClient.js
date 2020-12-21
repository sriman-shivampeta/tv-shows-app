import axios from "axios";

const _URL = "http://api.tvmaze.com";

const getAllTvShows = () => {
  return axios.get(_URL + "/shows").then(res => res.data);
};

export { getAllTvShows };
