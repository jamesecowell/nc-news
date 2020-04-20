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

class ArticleVoter extends React.Component {
  state = {
    voteCount: 0,
  };

  render() {
    const { voteCount } = this.state;

    let upVoteButton = (
      <Button primary className="upVote" onClick={() => this.handleVote(1)}>
        Up
      </Button>
    );
    let downVoteButton = (
      <Button primary className="downVote" onClick={() => this.handleVote(-1)}>
        Down
      </Button>
    );

    if (voteCount > 1) {
      upVoteButton = <Button>Up</Button>;
    }
    if (voteCount < 0) {
      downVoteButton = <Button>Down</Button>;
    }

    return (
      <section className="ArticleVoter">
        {upVoteButton}
        {downVoteButton}
      </section>
    );
  }

  handleVote = (inc_vote) => {
    const { voteCount } = this.state;
    const { article_id, type } = this.props;

    if (voteCount >= -2 && voteCount <= 2) {
      this.setState((currentState) => {
        return (currentState.voteCount += inc_vote);
      });
      api.vote(type, article_id, inc_vote);
      this.props.displayVote(inc_vote);
    }
  };
}

export default ArticleVoter;
