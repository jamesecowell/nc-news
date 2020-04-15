import React from 'react';
import { Router, Link } from '@reach/router';
import './styles/App.css';
import Header from './components/Header';
import TopicList from './components/TopicList';
import ArticleList from './components/ArticleList';
import ArticleBody from './components/ArticleBody';
import UserBar from './components/UserBar';

class App extends React.Component {
  state = {
    userInfo: 'jessjelly',
  };

  render() {
    return (
      <div className="App">
        <Link to="/">
          <Header />
        </Link>
        <UserBar username={this.state.userInfo} />
        <TopicList />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/topics/:chosenTopic" />
          <ArticleBody path="/topics/:chosenTopic/:article_id" />
        </Router>
      </div>
    );
  }
}

export default App;
