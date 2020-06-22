import React from "react";
import { render, fireEvent, cleanup, getAllByTitle } from "@testing-library/react";
import App from "./App";

describe('App', () => {
  it('renders a cockpit component', () => {
    const {getByTitle} = render(<App />)
    expect(getByTitle('cockpit')).toBeTruthy()
  });
});