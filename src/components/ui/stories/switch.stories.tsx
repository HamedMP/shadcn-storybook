import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof Switch> = {
  title: "shadcn-ui/components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "The controlled state of the switch",
    },
    defaultChecked: {
      control: "boolean",
      description: "The default state of the switch when uncontrolled",
    },
    onCheckedChange: {
      action: "checkedChanged",
      description: "Event handler called when the checked state changes",
    },
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the switch",
    },
    required: {
      control: "boolean",
      description:
        "When true, indicates that the user must check the switch before the form can be submitted",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the switch",
    },
  },
  args: {
    defaultChecked: false,
    disabled: false,
    required: false,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A control that allows the user to toggle between checked and not checked.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add switch

# Install using pnpm
pnpm dlx shadcn@latest add switch

# Install using yarn
yarn dlx shadcn@latest add switch

# Install using bun
bunx shadcn@latest add switch
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install @radix-ui/react-switch
\`\`\`
`,
      },
      components: {
        code: CodeBlockCommand,
        wrapper: CodeBlockWrapper,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => <Switch {...args} />,
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" {...args} />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => <Switch {...args} />,
};

export const LabelPosition: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="left-label" {...args} />
        <Label htmlFor="left-label">Label on the right (default)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Label htmlFor="right-label">Label on the left</Label>
        <Switch id="right-label" {...args} />
      </div>
    </div>
  ),
};

export const FormWithMultipleSwitches: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="wifi" {...args} />
        <Label htmlFor="wifi">Wi-Fi</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="bluetooth" {...args} />
        <Label htmlFor="bluetooth">Bluetooth</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" {...args} />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="disabled-unchecked" {...args} />
        <Label htmlFor="disabled-unchecked" className="text-muted-foreground">
          Disabled Unchecked
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled-checked" defaultChecked {...args} />
        <Label htmlFor="disabled-checked" className="text-muted-foreground">
          Disabled Checked
        </Label>
      </div>
    </div>
  ),
};

export const WithDescription: Story = {
  render: (args) => (
    <div className="grid gap-1.5">
      <div className="flex items-center space-x-2">
        <Switch id="notifications" {...args} />
        <Label htmlFor="notifications">Enable notifications</Label>
      </div>
      <p className="text-sm text-muted-foreground ml-6">
        You will receive daily notifications when new content is posted.
      </p>
    </div>
  ),
};
