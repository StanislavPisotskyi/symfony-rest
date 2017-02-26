import React, { Component } from 'react';
import Table from './Table';

export default class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      blogPosts: []
    };
    fetch('http://localhost:8000/posts', {
      method: 'GET',
      mode: 'CORS'
    }).then(res => res.json())
        .then(data => {
          this.setState({
            blogPosts: data
          })
        }).catch(err => err);
  }

  render()
  {
    return (
        <Table blogPosts={this.state.blogPosts} />
    );
  }
}
