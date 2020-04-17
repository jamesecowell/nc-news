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
    console.log('mount');
    const { article_id } = this.props;

    this.fetchArticleComments(article_id);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('update');
    const { article_id } = this.props;
    const { comments } = this.state;

    if (prevState.comments !== comments) {
      this.fetchArticleComments(article_id);
    }
  }

  fetchArticleComments = (article_id) => {
    api.getArticleComments(article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  };

  render() {
    console.log('render');
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

  removeComment = () => {
    console.log('removeComment');
    this.setState(this.state);
  };
}

export default CommentList;
