import axios from "axios";
import {
  getAllTvShows,
  getTvShowById,
  getTvShowsByName
} from "../../../src/service/httpClient";
import { allTvShowsResponse } from "./response_mock";

jest.mock("axios");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Checking getAllTvShows API", () => {
  test("Axios call to getAllTvShows with Success Response...", async () => {
    axios.get.mockResolvedValueOnce(allTvShowsResponse);
    await getAllTvShows().then(data => {
      expect(data).toStrictEqual(allTvShowsResponse.data);
    });
  });

  test("Axios call to getAllTvShows with Error Response...", async () => {
    axios.get.mockRejectedValueOnce("Network error");
    await getAllTvShows().catch(e => expect(e).toMatch("Network error"));
  });
});

describe("Checking getTvShowById API", () => {
  test("Axios call to getTvShowById with Success Response...", async () => {
    axios.get.mockResolvedValueOnce(allTvShowsResponse);
    await getTvShowById().then(data => {
      expect(data).toStrictEqual(allTvShowsResponse.data);
    });
  });

  test("Axios call to getTvShowById with Error Response...", async () => {
    axios.get.mockRejectedValueOnce("Network error");
    await getTvShowById().catch(e => expect(e).toMatch("Network error"));
  });
});

describe("Checking getTvShowsByName API", () => {
  test("Axios call to getTvShowsByName with Success Response...", async () => {
    axios.get.mockResolvedValueOnce(allTvShowsResponse);
    await getTvShowsByName().then(data => {
      expect(data).toStrictEqual(allTvShowsResponse.data);
    });
  });

  test("Axios call to getTvShowsByName with Error Response...", async () => {
    axios.get.mockRejectedValueOnce("Network error");
    await getTvShowsByName().catch(e => expect(e).toMatch("Network error"));
  });
});
