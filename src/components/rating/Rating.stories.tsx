import { Meta, StoryFn } from "@storybook/react";
import Rating from "./Rating";
import { RatingProps } from "../../types";
import "../../styles/vars.scss";

const meta: Meta<RatingProps> = {
  title: "atoms/Rating",
  component: Rating,
  argTypes: {
    value: {
      control: {
        type: "radio",
      },
      description: "Rating",
      defaultValue: 0,
      options: [0, 1, 2, 3, 4, 5],
    },
  },
};

export default meta;

const Template: StoryFn<RatingProps> = (args) => <Rating {...args} />;

export const Default: StoryFn<RatingProps> = Template.bind({});
Default.args = {
  value: 0,
};
