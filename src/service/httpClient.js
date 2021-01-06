import axios from "axios";

const _URL = "http://api.tvmaze.com";

const getAllTvShows = () => {
  return axios
    .get(`${_URL}/shows`)
    .then(res => res.data)
    .catch(() => {});
};

const getTvShowById = id => {
  return axios
    .get(`${_URL}/shows/${id}?embed=cast`)
    .then(res => res.data)
    .catch(() => {});
};

const getTvShowsByName = name => {
  return axios
    .get(`${_URL}/search/shows?q=${name}`)
    .then(res => res.data)
    .catch(() => {});
};

export { getAllTvShows, getTvShowById, getTvShowsByName };
