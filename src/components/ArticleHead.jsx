import React from 'react';
import Moment from 'react-moment';

class ArticleHead extends React.Component {
  render() {
    const { article, votes } = this.props;

    return (
      <div className="ArticleHead">
        <h2 className="articleTitle">{article.title}</h2>
        <h3 className="articleAuthor">{article.author}</h3>
        <p className="articleInfo">
          {votes} votes - {article.comment_count} comments - created:
          <Moment fromNow>{article.created_at}</Moment>
        </p>
      </div>
    );
  }
}

export default ArticleHead;
