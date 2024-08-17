import { Meta, StoryFn } from "@storybook/react";
import Accordion from "./Accordion";
import { AccordionProps } from "../../types";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import "../../styles/index.scss";
import "../../styles/vars.scss";

const data = {
  id: 1,
  question: "How can I track the status of my order?",
  answer:
    "After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the My Orders section to track your delivery status.",
};

const meta: Meta<AccordionProps> = {
  title: "molecules/Accordion",
  component: Accordion,
  argTypes: {
    data: {
      description: "Data for the accordion component",
      defaultValue: data,
      control: {
        type: "object",
      },
    },
  },
  parameters: {
    backgrounds: {
      default: "purple",
    },
  },
};

export default meta;

const Template: StoryFn<AccordionProps> = (args) => (
  <Provider store={store}>
    <Accordion {...args} />
  </Provider>
);

export const Default: StoryFn<AccordionProps> = Template.bind({});
Default.args = {
  data: data,
};
