import React from 'react';

class CommentAdder extends React.Component {
  render() {
    return (
      <form>
        <input type="text" defaultValue="Add a comment..."></input>
      </form>
    );
  }
}

export default CommentAdder;
