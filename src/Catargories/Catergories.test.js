import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Catergories } from "./Catagories";

describe("Catergories", () => {
  let wrapper;
  let props;
  beforeEach(() => {
    wrapper = <Catergories {...props} />;
  });
  cleanup(() => {
    cleanup();
  });
});