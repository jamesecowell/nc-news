import React from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import ArticleHead from './ArticleHead';

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

  componentDidUpdate() {
    const { chosenTopic } = this.props;

    api.getArticles(chosenTopic).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles } = this.state;

    return (
      <ul className="ArticleList">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Link
                to={`/topics/${article.topic}/${article.article_id}`}
                article={article}
              >
                <ArticleHead article={article} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ArticleList;
