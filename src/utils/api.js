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

export const getSingleArticle = (article_id) => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getArticleComments = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};
