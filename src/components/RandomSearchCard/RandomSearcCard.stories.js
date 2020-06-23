import React from "react";
import { action } from "@storybook/addon-actions";
import { RandomSearchCard } from "./RandomSearchCard";
import '../../index.css'
import '../../App.css'

export default {
  title: "RandomSearchCard",
  component: RandomSearchCard,
excludeStories: /.*props$/,
};

export const props = {
    
}

export const Default = () => (
  <RandomSearchCard {...props} />
);
