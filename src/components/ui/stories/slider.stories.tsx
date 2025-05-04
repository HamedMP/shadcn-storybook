import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof Slider> = {
  title: "shadcn-ui/components/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "object",
      description: "The default value of the slider",
    },
    value: {
      control: "object",
      description: "The controlled value of the slider",
    },
    onValueChange: {
      action: "valueChanged",
      description: "Event handler called when the value changes",
    },
    min: {
      control: { type: "number" },
      description: "The minimum value for the range",
    },
    max: {
      control: { type: "number" },
      description: "The maximum value for the range",
    },
    step: {
      control: { type: "number" },
      description: "The stepping interval",
    },
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the slider",
    },
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "The orientation of the slider",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    orientation: "horizontal",
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `An input component that allows users to select a value from a range.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add slider

# Install using pnpm
pnpm dlx shadcn@latest add slider

# Install using yarn
yarn dlx shadcn@latest add slider

# Install using bun
bunx shadcn@latest add slider
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install @radix-ui/react-slider
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
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[300px]">
      <Slider {...args} />
    </div>
  ),
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: [30],
  },
  render: (args) => (
    <div className="w-[300px]">
      <Slider {...args} />
    </div>
  ),
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
  },
  render: (args) => (
    <div className="w-[300px]">
      <Slider {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Slider {...args} />
    </div>
  ),
};

export const CustomSteps: Story = {
  args: {
    defaultValue: [50],
    step: 10,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Slider {...args} />
    </div>
  ),
};

export const CustomRange: Story = {
  args: {
    defaultValue: [40],
    min: 20,
    max: 80,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Slider {...args} />
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    defaultValue: [50],
  },
  render: (args) => (
    <div className="h-[200px]">
      <Slider {...args} />
    </div>
  ),
};

export const WithLabels: Story = {
  render: (args) => (
    <div className="space-y-8 w-[300px]">
      <div>
        <div className="flex justify-between mb-2">
          <label className="text-sm">Volume</label>
          <span className="text-sm text-muted-foreground">50%</span>
        </div>
        <Slider {...args} defaultValue={[50]} />
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <label className="text-sm">Price Range</label>
          <span className="text-sm text-muted-foreground">$25 - $75</span>
        </div>
        <Slider {...args} defaultValue={[25, 75]} />
      </div>
    </div>
  ),
};

export const CustomStyles: Story = {
  render: (args) => (
    <div className="w-[300px]">
      <Slider
        {...args}
        className={cn(
          "h-4",
          "[&_[role=slider]]:h-4 [&_[role=slider]]:w-4",
          "[&_[role=slider]]:bg-primary"
        )}
      />
    </div>
  ),
};
