import React from 'react';

class ArticleHead extends React.Component {
  render() {
    const { article } = this.props;

    return (
      <div className="ArticleHead">
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        <p>
          {article.votes} votes - created: {article.created_at} -{' '}
          {article.comment_count} comments
        </p>
      </div>
    );
  }
}

export default ArticleHead;
