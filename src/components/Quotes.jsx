import React, { Component } from 'react';

export default class Quotes extends Component {
  render() {
    const { quotes } = this.props;
    return (
      <div>
        {quotes.map(q => (
          <div key={q.id}>{q.text}</div>
        ))}
      </div>
    );
  }
}
