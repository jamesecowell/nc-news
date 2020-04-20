import React from 'react';
import { Router, Link } from '@reach/router';
import './styles/App.css';
import Header from './components/Header';
import TopicList from './components/TopicList';
import ArticleList from './components/ArticleList';
import ArticleBody from './components/ArticleBody';
import UserBar from './components/UserBar';
import ErrorPage from './components/ErrorPage';

class App extends React.Component {
  state = {
    userInfo: 'jessjelly',
  };

  render() {
    const username = this.state.userInfo;

    return (
      <div className="App">
        <UserBar username={username} />
        <Link to="/" className="head-link">
          <Header />
        </Link>
        <Router>
          <ErrorPage default />
          <ArticleList path="/" />
          <ArticleList path="/topics/:chosenTopic" />
          <ArticleBody
            path="/topics/:chosenTopic/:article_id"
            username={username}
          />
        </Router>
        <TopicList />
      </div>
    );
  }
}

export default App;
