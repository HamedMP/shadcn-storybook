import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof Label> = {
  title: "shadcn-ui/components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    htmlFor: {
      control: "text",
      description: "The ID of the element the label is associated with",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Renders an accessible label associated with controls.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add label

# Install using pnpm
pnpm dlx shadcn@latest add label

# Install using yarn
yarn dlx shadcn@latest add label

# Install using bun
bunx shadcn@latest add label
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install @radix-ui/react-label
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
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    htmlFor: "email",
    children: "Email",
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label {...args} />
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const WithRequired: Story = {
  args: {
    htmlFor: "required-email",
    children: "Email",
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <div className="flex items-center gap-1">
        <Label {...args} />
        <span className="text-destructive">*</span>
      </div>
      <Input type="email" id="required-email" placeholder="Email" required />
    </div>
  ),
};

export const WithDisabledInput: Story = {
  args: {
    htmlFor: "disabled-email",
    children: "Email",
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label {...args} />
      <Input type="email" id="disabled-email" placeholder="Email" disabled />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const WithSwitch: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const WithRadioGroup: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  ),
};

export const CustomStyling: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label
        htmlFor="custom-email"
        className="text-primary font-bold text-base"
      >
        Custom Label
      </Label>
      <Input type="email" id="custom-email" placeholder="Email" />
    </div>
  ),
};
