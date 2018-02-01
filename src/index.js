import React, { Component } from 'react';
import { render } from 'react-DOM';
import axios from 'axios';


class Story extends Component {
  state = {
    title: null,
    url: null
    // searchText: '',
    // searchResults: []
  }

  componentWillMount(){
    console.log('loading....')
  }

  componentDidMount(){
    axios.get('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty').then((res) => {
      this.setState({
        title: res.data.title,
        url: res.data.url,
        // searchText: res.data.searchText,
        // searchResults: res.data.searchResults
      })
    })
  }

  render() {
    return(
      <span>
        <h1>{this.state.title}</h1>
        <a href={this.state.url}>{this.state.url}</a>
        // <input>{this.state.searchText}</input>
        // <p>{this.state.searchResults}</p>
      </span>)
  }
}

render(
  <Story />,
  document.getElementById('root')
)
