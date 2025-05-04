import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof RadioGroup> = {
  title: "shadcn-ui/components/RadioGroup",
  component: RadioGroup,
  subcomponents: {
    RadioGroupItem,
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    defaultValue: {
      control: "text",
      description: "The default selected value",
    },
    value: {
      control: "text",
      description: "The controlled selected value",
    },
    disabled: {
      control: "boolean",
      description: "Whether the radio group is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether the radio group is required",
    },
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "The orientation of the radio group",
    },
    onValueChange: {
      action: "valueChanged",
      description: "Event handler called when the value changes",
    },
  },
  args: {
    defaultValue: "option-one",
    disabled: false,
    required: false,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add radio-group

# Install using pnpm
pnpm dlx shadcn@latest add radio-group

# Install using yarn
yarn dlx shadcn@latest add radio-group

# Install using bun
bunx shadcn@latest add radio-group
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install @radix-ui/react-radio-group
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
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="d-option-one" />
        <Label htmlFor="d-option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="d-option-two" />
        <Label htmlFor="d-option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="d-option-three" />
        <Label htmlFor="d-option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  args: {
    className: "flex flex-row space-x-4",
  },
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="h-option-one" />
        <Label htmlFor="h-option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="h-option-two" />
        <Label htmlFor="h-option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="h-option-three" />
        <Label htmlFor="h-option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithForm: Story = {
  render: (args) => (
    <form className="space-y-6">
      <div>
        <h3 className="mb-4 text-sm font-medium">Which plan would you like?</h3>
        <RadioGroup defaultValue="basic" className="space-y-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="basic" id="plan-basic" />
            <Label htmlFor="plan-basic">Basic ($10/month)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="pro" id="plan-pro" />
            <Label htmlFor="plan-pro">Pro ($20/month)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="enterprise" id="plan-enterprise" />
            <Label htmlFor="plan-enterprise">Enterprise ($40/month)</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-medium">Billing cycle</h3>
        <RadioGroup defaultValue="monthly" className="space-y-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="monthly" id="billing-monthly" />
            <Label htmlFor="billing-monthly">Monthly</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="annually" id="billing-annually" />
            <Label htmlFor="billing-annually">Annually (Save 10%)</Label>
          </div>
        </RadioGroup>
      </div>
    </form>
  ),
};

export const CustomStyling: Story = {
  render: (args) => (
    <RadioGroup defaultValue="default" className="grid grid-cols-3 gap-4">
      <div>
        <RadioGroupItem
          value="default"
          id="style-default"
          className="peer sr-only"
        />
        <Label
          htmlFor="style-default"
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-3 h-6 w-6"
          >
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
          </svg>
          Default
        </Label>
      </div>
      <div>
        <RadioGroupItem
          value="comfort"
          id="style-comfort"
          className="peer sr-only"
        />
        <Label
          htmlFor="style-comfort"
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-3 h-6 w-6"
          >
            <path d="M2 20h20" />
            <path d="M5 12a4 4 0 0 1 4-4c4 0 5 6 9 6a4 4 0 0 0 4-4" />
          </svg>
          Comfort
        </Label>
      </div>
      <div>
        <RadioGroupItem
          value="compact"
          id="style-compact"
          className="peer sr-only"
        />
        <Label
          htmlFor="style-compact"
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-3 h-6 w-6"
          >
            <rect x="8" y="2" width="8" height="20" rx="2" />
            <path d="M4 10h4" />
            <path d="M4 14h4" />
            <path d="M16 10h4" />
            <path d="M16 14h4" />
          </svg>
          Compact
        </Label>
      </div>
    </RadioGroup>
  ),
};
