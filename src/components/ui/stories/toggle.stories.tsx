import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof Toggle> = {
  title: "shadcn-ui/components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    defaultPressed: {
      control: "boolean",
      description: "The default state of the toggle",
    },
    pressed: {
      control: "boolean",
      description: "The controlled state of the toggle",
    },
    onPressedChange: {
      action: "pressed",
      description: "Event handler called when the state changes",
    },
    variant: {
      control: "select",
      options: ["default", "outline"],
      description: "The toggle variant to use",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
      description: "The size of the toggle",
    },
    disabled: {
      control: "boolean",
      description: "Whether the toggle is disabled",
    },
    asChild: {
      control: "boolean",
      description: "Whether to render as a child",
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: "default",
    size: "default",
    disabled: false,
    defaultPressed: false,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A two-state button that can be either on or off.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add toggle

# Install using pnpm
pnpm dlx shadcn@latest add toggle

# Install using yarn
yarn dlx shadcn@latest add toggle

# Install using bun
bunx shadcn@latest add toggle
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install @radix-ui/react-toggle
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
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args) => <Toggle {...args}>Toggle</Toggle>,
};

export const DefaultPressed: Story = {
  args: {
    defaultPressed: true,
  },
  render: (args) => <Toggle {...args}>Toggle</Toggle>,
};

export const WithOutlineVariant: Story = {
  args: {
    variant: "outline",
  },
  render: (args) => <Toggle {...args}>Toggle</Toggle>,
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Toggle {...args} aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle {...args} aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle {...args} aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};

export const Small: Story = {
  args: {
    size: "sm",
  },
  render: (args) => <Toggle {...args}>Toggle</Toggle>,
};

export const Large: Story = {
  args: {
    size: "lg",
  },
  render: (args) => <Toggle {...args}>Toggle</Toggle>,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <Toggle {...args}>Toggle</Toggle>,
};
