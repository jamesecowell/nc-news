import React from 'react';
import * as api from '../utils/api';

class ArticleHead extends React.Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="ArticleHead">
        <h2>{articles[0].title}</h2>
        <h3>{articles[0].author}</h3>
        <p>{articles[0].date}</p>
        <p>{articles[0].votes}</p>
      </div>
    );
  }
}

export default ArticleHead;
