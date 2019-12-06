import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from "@testing-library/react";


test('App renders', () => {
  render(<App />);
  // ReactDOM.unmountComponentAtNode(div);
});

// test(" Both name and country are rendered", () => {
// const {getByTestId} = render(<App />);

//   getByTestId(/name/i);
//   getByTestId(/country/i);
// })

test("players and title are rendered", () => {
  const {getByTestId, getByText} = render(<App />)

  getByTestId(/players/i);
  getByText(/women's world cup/i)
  // getByTestId(/searches/i)
})

// test("both name and country are rendered", () => {
//  const {getByText} = render(<App/>); 

//  getByText(/name/i);
//  getByText(/country/i);
// })