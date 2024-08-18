import { Meta, StoryFn } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../../store/store.ts";
import Counter from "./Counter.tsx";
import { CounterProps } from "../../types.ts";
import "../../styles/index.scss";
import "../../styles/vars.scss";

export default {
  title: "Molecules/Counter",
  component: Counter,
} as Meta;

const Template: StoryFn<CounterProps> = (args) => (
  <Provider store={store}>
    <Counter {...args} />
  </Provider>
);

export const Default: StoryFn<CounterProps> = Template.bind({});
Default.args = {
  initialQuantity: 1,
};
