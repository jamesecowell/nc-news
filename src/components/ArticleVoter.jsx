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
    return (
      <section className="ArticleVoter">
        <Button primary className="upVote" onClick={() => this.handleVote(1)}>
          Up
        </Button>
        <Button
          primary
          className="downVote"
          onClick={() => this.handleVote(-1)}
        >
          Down
        </Button>
      </section>
    );
  }

  handleVote = (inc_vote) => {
    const { article_id } = this.props;
    api.articleVote(article_id, inc_vote);
    this.props.displayVote(inc_vote);
  };
}

export default ArticleVoter;
