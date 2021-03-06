import React from 'react';
import * as rtl from 'react-testing-library';
import Container from './Container';

// you want to clean up after each test, because changes in the DOM
// to the component can persist between tests
afterEach(rtl.cleanup);

// To test axios requests, we need to mock it first,
// because we don't want to make real requests while testing
// const quotes = [
//   { id: 1, text: 'be montered or be bad' },
//   { id: 2, text: 'have fun' },
//   { id: 3, text: 'use network tab' },
// ];

jest.mock('axios', () => {
  return {
    get: () => {
      return Promise.resolve({
        data: [
          { id: 1, text: 'be mentored or be bad' },
          { id: 2, text: 'have fun' },
          { id: 3, text: 'use network tab' },
        ],
      });
    },
  };
});

/*
DIFFERENCE BETWEEN get, query, find METHODS:
  - get will crash if no match
  - query will return null if no match
  - find will WAIT and only FAIL after 5s (so you can use it with ASYNC,AWAIT)
*/

describe('Container', () => {
  it('outputs "Hello World!" message', () => {
    // RTL executes our component, so it spits out the DOM it produces
    // we run assertions against that DOM that comes from the component
    // but to render the component, we'll save it to a variable
    const wrapper = rtl.render(<Container />);

    // to visually see what the wrapper DOM render looks like you can use
    // console.log(wrapper.debug());

    // you dont need the second part of the assertion (.toBe(...))
    // because if it would not have the string, the test would fail
    // expect(wrapper.getByText('Hello, World!'));
    // the above is quite brittle, its better to use RegExpressions
    expect(wrapper.getByText(/world/i));
  });

  it('does not output the spinner "loading..."', () => {
    const wrapper = rtl.render(<Container />);
    // queryByText evaluates to falsy value if the string is not
    // on the rendered component
    // expect(wrapper.queryByText('loading...')).toBeFalsy();
    expect(wrapper.queryByText(/loading/i)).toBeFalsy();
  });

  // this is a ASYNC function!
  it('renders quotes texts', async () => {
    const wrapper = rtl.render(<Container />);
    // before teh btn click. check if the quotes are NOT rendered
    expect(wrapper.queryByText(/mentored/i)).toBeFalsy();

    // how do you CLICK on the button to invoke the request?
    // click() takes "selector" to target the button
    // fires an event that will fetch quotes
    rtl.fireEvent.click(wrapper.getByText(/get quotes/i));

    // check if the quotes were rendered (DOM contains the word "mentored")
    // awaits for a quote to be there
    await wrapper.findByText(/mentored/i);

    // now you can run assertions
    expect(wrapper.getByText(/mentored/i));
    expect(wrapper.getByText(/fun/i));
    expect(wrapper.getByText(/network/i));
  });
});
