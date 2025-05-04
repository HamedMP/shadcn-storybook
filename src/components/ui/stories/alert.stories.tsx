import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertTitle } from "../alert";
import { Terminal } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "shadcn-ui/components/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
  },
  args: {
    variant: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
      description: "The visual style variant of the alert",
    },
  },
  tags: ["autodocs"],
  render: (args) => (
    <Alert {...args}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};
