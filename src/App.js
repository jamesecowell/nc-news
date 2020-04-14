import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import TopicList from './components/TopicList';
// import ArticleList from './components/ArticleList';
import ArticleSorter from './components/ArticleSorter';
import ArticleHead from './components/ArticleHead';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ArticleSorter />
        <TopicList />
        <ArticleHead />
      </div>
    );
  }
}

export default App;
