import React from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import ArticleHead from './ArticleHead';
import ArticleSorter from './ArticleSorter';
import Loader from './Loader';

class ArticleList extends React.Component {
  state = {
    articles: [],
    sortBy: '',
    isLoading: true,
  };

  componentDidMount() {
    const { chosenTopic } = this.props;
    const { sortBy } = this.state;
    this.fetchArticles(chosenTopic, sortBy);
  }

  componentDidUpdate(prevProps, prevState) {
    const { chosenTopic } = this.props;
    const { sortBy } = this.state;
    if (prevProps.chosenTopic !== chosenTopic) {
      this.fetchArticles(chosenTopic, sortBy);
    }
  }

  fetchArticles = (chosenTopic, sortBy) => {
    api.getArticles(chosenTopic, sortBy).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <div className="ArticleList">
        <ArticleSorter sortArticles={this.sortArticles} />
        <ul>
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
      </div>
    );
  }

  sortArticles = (sortBy) => {
    this.setState({ sortBy: sortBy });
  };
}

export default ArticleList;
