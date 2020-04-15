import axios from 'axios';

const baseURL = 'https://jamesecowell-nc-news.herokuapp.com/api';

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (query) => {
  if (query === undefined) {
    return axios.get(`${baseURL}/articles`).then(({ data }) => {
      return data.articles;
    });
  } else {
    return axios.get(`${baseURL}/articles?topic=${query}`).then(({ data }) => {
      return data.articles;
    });
  }
};
