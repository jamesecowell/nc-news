import React from 'react';
import * as api from '../utils/api';
import CommentBody from './CommentBody';
import Loader from './Loader';
import CommentAdder from './CommentAdder';

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
    const { article_id, username } = this.props;
    if (isLoading) return <Loader />;
    return (
      <div className="CommentList">
        <CommentAdder
          article_id={article_id}
          username={username}
          addComment={this.addComment}
        />
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

  addComment = (newComment) => {
    this.setState((state) => {
      return { comments: [newComment, ...state.comments] };
    });
  };
}

export default CommentList;
