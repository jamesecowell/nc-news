import React from 'react';
import * as api from '../utils/api';
import styled, { css } from 'styled-components';

const Button = styled.button`
  font-family: 'Lato', sans-serif;
  background: transparent;
  border-radius: 3px;
  border: 2px solid #e34234;
  color: #e34234;
  margin: 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: #e34234;
      color: white;
    `}
`;

class CommentVoter extends React.Component {
  state = {
    isLoading: true,
    voteCount: 0,
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <section className="CommentVoter">
        <Button primary onClick={() => this.handleVote(1)}>
          Up
        </Button>
        <Button primary onClick={() => this.handleVote(-1)}>
          Down
        </Button>
      </section>
    );
  }

  handleVote = (inc_vote) => {
    const { comment_id } = this.props;
    api.commentVote(comment_id, inc_vote);
    this.props.displayVote(inc_vote);
  };
}

export default CommentVoter;
