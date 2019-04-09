import React, { Component } from 'react';
import axios from 'axios';
import './Container.less';

export default class Container extends Component {
  state = {
    quotes: [],
  };

  getQuotes = () => {
    axios.get('https://quotes.org/api').then(res => {
      this.setState({
        quotes: res.data,
      });
    });
  };

  render() {
    return (
      <div className='container-hello-world'>
        Hello, World!
        {this.state.quotes.map(q => (
          <div key={q.id}>{q.text}</div>
        ))}
        <button onClick={this.getQuotes}>Get quotes</button>
      </div>
    );
  }
}
