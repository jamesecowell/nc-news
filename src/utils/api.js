import axios from 'axios';

const baseURL = 'https://jamesecowell-nc-news.herokuapp.com/api';

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (query, sortBy) => {
  if (query !== undefined) {
    console.log(query);
    return axios.get(`${baseURL}/articles?topic=${query}`).then(({ data }) => {
      return data.articles;
    });
  } else if (sortBy !== undefined) {
    console.log(sortBy);
    return axios
      .get(`${baseURL}/articles?sort_by=${sortBy}`)
      .then(({ data }) => {
        return data.articles;
      });
  } else {
    return axios.get(`${baseURL}/articles`).then(({ data }) => {
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

export const commentVote = (comment_id, inc_votes) => {
  return axios
    .patch(`${baseURL}/comments/${comment_id}`, { inc_votes })
    .then(({ data }) => {
      return data.comment;
    });
};

export const articleVote = (article_id, inc_votes) => {
  return axios
    .patch(`${baseURL}/articles/${article_id}`, { inc_votes })
    .then(({ data }) => {
      return data.article;
    });
};
