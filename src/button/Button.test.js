import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  let wrapper;
  let props;
  const initialProps = {
    label: "test label",
    onClick: jest.fn(),
  };
  beforeEach(() => {
    wrapper = <Button {...props} />;
  });
  afterEach(() => {
    props = initialProps;
    cleanup();
  });

  test("renders a label passed by props", () => {
    const { getByText } = render(wrapper);
    expect(getByText("test label")).toBeTruthy();
  });

  test("onClick should run a function passed by props", () => {
    const { getByText } = render(wrapper);
    fireEvent.click(getByText("test label"));
    expect(props.onClick).toHaveBeenCalled();
  });

  test("if blueColor prop is true, changes the style of the button to blue", () => {
    props = {
      ...initialProps,
      blueColor: true,
    };
    const { getByText, container } = render(<Button {...props} />);
    const button = getByText("test label");
    expect(container.firstChild.classList.contains("button blue")).toBe(true);
    fireEvent.mouseEnter(button);
    expect(container.firstChild.classList.contains("button blue-light")).toBe(
      true
    );
    fireEvent.mouseDown(button);
    expect(container.firstChild.classList.contains("button blue-dark")).toBe(
      true
    );
    fireEvent.mouseUp(button);
    fireEvent.mouseOut(button);
    expect(container.firstChild.classList.contains("button blue")).toBe(true);
  });
});
