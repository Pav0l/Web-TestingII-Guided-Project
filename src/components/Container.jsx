import React, { Component } from 'react';
import axios from 'axios';
import './Container.less';
import Quotes from './Quotes';

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
        {/* You can refactor code and still test it with the same tests
to see if the Component broke
 */}
        <Quotes quotes={this.state.quotes} />
        {/* {this.state.quotes.map(q => (
          <div key={q.id}>{q.text}</div>
        ))} */}
        <button onClick={this.getQuotes}>Get quotes</button>
      </div>
    );
  }
}
