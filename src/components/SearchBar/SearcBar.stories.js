import React from "react";
import { action } from "@storybook/addon-actions";
import { SearchBar } from "./SearchBar";
import "../../App.css";
import "../../index.css";

export default {
  title: "SearchBar",
  component: SearchBar,
  excludeStories: /.*props$/,
};

export const props = {
  searchFunc: action("searchFunc"),
};

export const Default = () => <SearchBar {...props} />;
