import React from 'react';
import * as api from '../utils/api';

class ArticleList extends React.Component {
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
      <ul className="ArticleList">
        {articles.map((article) => {
          return (
            <li key={article}>
              <h3>{article.title}</h3>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ArticleList;
