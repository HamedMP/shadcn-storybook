import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof Textarea> = {
  title: "shadcn-ui/components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the textarea",
    },
    value: {
      control: "text",
      description: "The controlled value of the textarea",
    },
    defaultValue: {
      control: "text",
      description: "The default value of the textarea",
    },
    disabled: {
      control: "boolean",
      description: "Whether the textarea is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether the textarea is required",
    },
    readOnly: {
      control: "boolean",
      description: "Whether the textarea is read-only",
    },
    rows: {
      control: { type: "number", min: 1 },
      description: "The number of rows in the textarea",
    },
    onChange: {
      action: "changed",
      description: "Event handler called when the value changes",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  args: {
    placeholder: "Type your message here.",
    disabled: false,
    required: false,
    readOnly: false,
    rows: 4,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Displays a form textarea or a component that looks like a textarea.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add textarea

# Install using pnpm
pnpm dlx shadcn@latest add textarea

# Install using yarn
yarn dlx shadcn@latest add textarea

# Install using bun
bunx shadcn@latest add textarea
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
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (args) => <Textarea {...args} />,
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" {...args} />
    </div>
  ),
};

export const WithText: Story = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Your message</Label>
      <Textarea
        placeholder="Type your message here."
        id="message-2"
        {...args}
      />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <Textarea {...args} />,
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "This is a default value for the textarea component.",
  },
  render: (args) => <Textarea {...args} />,
};

export const WithCustomRows: Story = {
  args: {
    rows: 8,
  },
  render: (args) => <Textarea {...args} />,
};

export const WithFormValidation: Story = {
  args: {
    required: true,
  },
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-required">Your message (required)</Label>
      <Textarea id="message-required" {...args} />
      <p className="text-sm text-muted-foreground">
        This field is required. Please enter a message.
      </p>
    </div>
  ),
};
