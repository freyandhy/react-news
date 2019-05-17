import React, { Component } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import LoadingImg from '../loading.svg';
import './App.css';

import { newsApi } from '../data/api';

class App extends Component {
  state = { 
    newsData: [],
    totalResults: 0,
    loading: true
  }

  componentDidMount() {
    newsApi().then(data => {
      this.setState({
        newsData: data.articles,
        totalResults: data.totalResults,
        loading: false
      })
    })
  }

  renderLoading() {
    return <div className="text-center mt-5"><img src={LoadingImg} alt="loading" /></div>
  }

  renderDataEmpty() {
    return <h2 className="text-center mt-5">Oops, Sorry. Empty News</h2>
  }
   
  render() { 
    const { loading, newsData, totalResults } = this.state;
    return (
      <div className="App">
        <Header title="News React" />
        <div className="container pb-5">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2">
              {loading && this.renderLoading()}
              {!loading && totalResults <= 0 && this.renderDataEmpty()}
              {!loading && totalResults > 0 && newsData.map((article, index) => {
                return <Card
                  key={index}
                  author={article.author}
                  desc={article.description}
                  published={article.publishedAt}
                  title={article.title}
                  url={article.url}
                  image={article.urlToImage}
                />
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;
