import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof ScrollArea> = {
  title: "shadcn-ui/components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    type: {
      control: "radio",
      options: ["auto", "always", "scroll", "hover"],
      description: "When to show the scrollbar",
    },
  },
  args: {
    className: "h-[200px] w-[350px] rounded-md border",
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Augments native scroll functionality for custom, cross-browser styling.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add scroll-area

# Install using pnpm
pnpm dlx shadcn@latest add scroll-area

# Install using yarn
yarn dlx shadcn@latest add scroll-area

# Install using bun
bunx shadcn@latest add scroll-area
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install @radix-ui/react-scroll-area
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
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: (args) => (
    <ScrollArea {...args}>
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="text-sm">
            Tag {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const WithParagraphs: Story = {
  args: {
    className: "h-[300px] w-[500px] rounded-md border p-4",
  },
  render: (args) => (
    <ScrollArea {...args}>
      <div className="space-y-4">
        <h4 className="text-lg font-bold">Lorem Ipsum</h4>
        {Array.from({ length: 10 }).map((_, i) => (
          <p key={i} className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const HorizontalScrolling: Story = {
  args: {
    className: "w-[400px] rounded-md border",
    type: "always",
  },
  render: (args) => (
    <div>
      <ScrollArea {...args}>
        <div className="flex h-[100px] w-[600px] items-center gap-4 p-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md border"
            >
              Item {i + 1}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
};

export const BothScrollbars: Story = {
  args: {
    className: "h-[300px] w-[400px] rounded-md border",
  },
  render: (args) => (
    <ScrollArea {...args}>
      <div className="h-[500px] w-[700px] p-4">
        <h4 className="text-lg font-bold">Content with both scrollbars</h4>
        <div className="grid grid-cols-5 gap-4 pt-4">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="flex h-20 w-32 items-center justify-center rounded-md border"
            >
              Item {i + 1}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};
