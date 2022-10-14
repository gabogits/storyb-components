import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    color: { control: "select" },
    fontColor: { control: "color" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  allCaps: false, //True capitalizar toda las palabra
};
export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true, //True capitalizar toda las palabra
};
export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary", //primary secondary terciary
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "normal",
  color: "tertiary",
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: "h1",
  fontColor: "#f4bd6a",
};
