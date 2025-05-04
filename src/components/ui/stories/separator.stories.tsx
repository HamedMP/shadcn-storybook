import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@/components/ui/separator";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof Separator> = {
  title: "shadcn-ui/components/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "The orientation of the separator",
    },
    decorative: {
      control: "boolean",
      description: "Whether the separator is purely decorative (aria-hidden)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  args: {
    orientation: "horizontal",
    decorative: true,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Visually or semantically separates content.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add separator

# Install using pnpm
pnpm dlx shadcn@latest add separator

# Install using yarn
yarn dlx shadcn@latest add separator

# Install using bun
bunx shadcn@latest add separator
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install @radix-ui/react-separator
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
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator {...args} className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Section 1</h4>
        <p className="text-sm text-muted-foreground">
          Content for the first section.
        </p>
      </div>
      <Separator {...args} className="my-4" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Section 2</h4>
        <p className="text-sm text-muted-foreground">
          Content for the second section.
        </p>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <div className="flex h-24 w-full max-w-md items-center">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Left Section</h4>
        <p className="text-sm text-muted-foreground">Left side content.</p>
      </div>
      <Separator {...args} className="mx-6 h-full" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Right Section</h4>
        <p className="text-sm text-muted-foreground">Right side content.</p>
      </div>
    </div>
  ),
};

export const WithCustomStyling: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Custom Styling</h4>
        <p className="text-sm text-muted-foreground">
          Separators can be styled with custom colors and thickness.
        </p>
      </div>
      <Separator {...args} className="my-4 bg-primary h-[2px]" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Next Section</h4>
        <p className="text-sm text-muted-foreground">
          Content after the custom separator.
        </p>
      </div>
    </div>
  ),
};

export const InCard: Story = {
  render: (args) => (
    <div className="w-full max-w-md rounded-lg border p-6 shadow-sm">
      <div className="space-y-1">
        <h3 className="text-xl font-semibold">Card Title</h3>
        <p className="text-sm text-muted-foreground">
          This is the card description or subtitle.
        </p>
      </div>
      <Separator {...args} className="my-4" />
      <div className="space-y-4">
        <p className="text-sm">
          This is the main content of the card. The separator helps define
          different sections within the card layout.
        </p>
        <div className="flex justify-end">
          <button className="rounded bg-primary px-3 py-1 text-sm text-primary-foreground">
            Action
          </button>
        </div>
      </div>
    </div>
  ),
};
