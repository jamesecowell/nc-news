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

    this.fetchArticleComments(article_id);
  }

  fetchArticleComments = (article_id) => {
    api.getArticleComments(article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  };

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
        <h2>Comments:</h2>
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <CommentBody
                  comment={comment}
                  username={username}
                  removeComment={this.removeComment}
                />
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

  removeComment = (comment_id) => {
    this.setState((currentState) => {
      return {
        comments: currentState.comments.filter((comment) => {
          return comment.comment_id !== comment_id;
        }),
      };
    });
  };
}

export default CommentList;
