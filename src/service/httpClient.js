import axios from "axios";

const _URL = "http://api.tvmaze.com";

const getAllTvShows = () => {
  return axios.get(_URL + "/shows").then(res => res.data);
};

const getTvShowById = id => {
  return axios.get(_URL + "/shows/" + id + "?embed=cast").then(res => res.data);
};

const getTvShowsByName = name => {
  return axios.get(_URL + "/search/shows?q=" + name).then(res => res.data);
};

export { getAllTvShows, getTvShowById, getTvShowsByName };
