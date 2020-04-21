import axios from 'axios';

const baseURL = 'https://jamesecowell-nc-news.herokuapp.com/api';

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (topic, sortBy) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: {
        topic: topic,
        sort_by: sortBy,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
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

export const vote = (type, id, inc_votes) => {
  return axios
    .patch(`${baseURL}/${type}/${id}`, { inc_votes })
    .then(({ data }) => {
      return data.article;
    });
};

export const postComment = (article_id, username, body) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, {
      username: username,
      body: body,
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return axios.delete(`${baseURL}/comments/${comment_id}`);
};
