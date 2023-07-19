import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = {
  args: {
    rightIcon: true,
    leftIcon: true,
    label: "Label",
    size: "large",
    type: "destructive",
    stateProp: "active",
    iconButton: "off",
    className: {},
    labelClassName: {},
  },
};
