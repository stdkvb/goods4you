import { Meta, StoryFn } from "@storybook/react";
import SearchBar from "./SearchBar";
import { SearchBarProps } from "../../types";
import "../../styles/index.scss";
import "../../styles/vars.scss";

const meta: Meta<SearchBarProps> = {
  title: "atoms/SearchBar",
  component: SearchBar,
  argTypes: {
    onSearch: {
      action: "onSearch",
      description: "function when search input changes",
    },
  },
};

export default meta;

const Template: StoryFn<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default: StoryFn<SearchBarProps> = Template.bind({});
Default.args = {
  onSearch: (value: string) => {
    console.log("Search value:", value);
  },
};
