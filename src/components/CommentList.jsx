import React from 'react';
import * as api from '../utils/api';
import CommentBody from './CommentBody';
import Loader from './Loader';

class CommentList extends React.Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    const { article_id } = this.props;
    console.log(article_id);

    api.getArticleComments(article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <div className="CommentList">
        <h3>Comments:</h3>
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <CommentBody comment={comment} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CommentList;
