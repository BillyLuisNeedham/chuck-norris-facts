import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Cockpit } from "./Cockpit";

describe("Cockpit", () => {
  let wrapper;
  let props;
  beforeEach(() => {
    wrapper = <Cockpit {...props} />;
  });
  cleanup(() => {
    cleanup();
  });
});