import React from 'react';

export default function Quotes(props) {
  if (!props.quotes || !props.quotes.length) {
    return <div>Sad! No quotes :(</div>;
  }

  return (
    <div>
      {props.quotes.map(q => (
        <div data-testid='quote' key={q.id}>
          {q.text}
        </div>
      ))}
    </div>
  );
}
