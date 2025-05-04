import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof Checkbox> = {
  title: "shadcn-ui/components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    defaultChecked: {
      control: "boolean",
      description: "The default checked state of the checkbox",
    },
    checked: {
      control: "boolean",
      description: "The controlled checked state of the checkbox",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether the checkbox is required",
    },
    name: {
      control: "text",
      description: "The name of the checkbox",
    },
    value: {
      control: "text",
      description: "The value of the checkbox",
    },
    onCheckedChange: {
      action: "checked",
      description: "Event handler called when the checked state changes",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the checkbox",
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
npx shadcn@latest add checkbox

# Install using pnpm
pnpm dlx shadcn@latest add checkbox

# Install using yarn
yarn dlx shadcn@latest add checkbox

# Install using bun
bunx shadcn@latest add checkbox
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install @radix-ui/react-checkbox
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
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: "default",
  },
};

export const WithText: Story = {
  render: (args) => (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" {...args} />
      <div className="grid gap-1.5 leading-none">
        <Label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </Label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    id: "terms2",
    disabled: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <Label
        htmlFor={args.id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </Label>
    </div>
  ),
};

export const FormSingle: Story = {
  args: {
    id: "terms3",
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <Label htmlFor={args.id} className="text-sm font-medium leading-none">
        I agree to the terms and conditions
      </Label>
    </div>
  ),
};

export const FormMultiple: Story = {
  render: (args) => (
    <div className="grid gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="recents" {...args} />
        <Label htmlFor="recents">Show recent projects</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="hidden" defaultChecked {...args} />
        <Label htmlFor="hidden">Show hidden files</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="backup" {...args} />
        <Label htmlFor="backup">Backup files</Label>
      </div>
    </div>
  ),
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithCustomStyle: Story = {
  args: {
    className:
      "h-6 w-6 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
  },
};
