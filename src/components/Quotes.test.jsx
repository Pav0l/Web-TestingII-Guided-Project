import React from 'react';
import * as rtl from 'react-testing-library';
import Quotes from './Quotes';

afterEach(rtl.cleanup);

const quotes = [
  { id: 1, text: 'be montered or be bad' },
  { id: 2, text: 'have fun' },
  { id: 3, text: 'use network tab' },
];

describe('Quotes component', () => {
  it('returns "sad" msg if quotes array is empty', () => {
    const wrap = rtl.render(<Quotes />);
    expect(wrap.getByText(/sad/i));
  });

  it('It returns a sad message if no array prop', () => {
    const wrap = rtl.render(<Quotes />);
    expect(wrap.getByText(/sad/i));
  });

  it('puts to the dom the right number of quotes', () => {
    const wrap = rtl.render(<Quotes quotes={quotes} />);
    // selects elements that contain 'data-testid' attribute with
    // specified value
    const quotesArray = wrap.getAllByTestId('quote');

    expect(quotesArray).toHaveLength(quotes.length);
  });
});
