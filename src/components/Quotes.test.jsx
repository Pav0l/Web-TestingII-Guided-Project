import React from 'react';
import * as rtl from 'react-testing-library';
import Quotes from './Quotes';

afterEach(rtl.cleanup);

describe('Quotes component', () => {
  it('returns "sad" msg if quotes array is empty', () => {
    const wrap = rtl.render(<Quotes />);
    expect(wrap.getByText(/sad/i));
  });

  it('It returns a sad message if no array prop', () => {
    const wrap = rtl.render(<Quotes />);
    expect(wrap.getByText(/sad/i));
  });
});
