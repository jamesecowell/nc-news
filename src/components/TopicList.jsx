import React from 'react';
import * as api from '../utils/api';

class TopicList extends React.Component {
  state = {
    topics: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { topics } = this.state;

    return (
      <ul className="TopicList">
        {topics.map((topic) => {
          return (
            <li key={topic}>
              <p>{topic.slug}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TopicList;
