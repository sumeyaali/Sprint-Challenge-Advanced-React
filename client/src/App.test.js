import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from "@testing-library/react";
import {getTestId} from "@testing-library/dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

// test(" Both name and country are rendered", () => {
// const {getByTestId} = render(<App />);

//   getByTestId(/name/i);
//   getByTestId(/country/i);
// })

test("both name and country are rendered", () => {
  const {getByTestId} = render(<App />);

  getByTestId('name');
  getByTestId(/country/i);
})