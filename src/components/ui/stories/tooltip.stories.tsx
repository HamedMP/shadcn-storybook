import type { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof TooltipProvider> = {
  title: "shadcn-ui/components/Tooltip",
  component: TooltipProvider,
  tags: ["autodocs"],
  argTypes: {
    delayDuration: {
      control: { type: "number" },
      description: "The delay duration for the tooltip to show",
    },
    skipDelayDuration: {
      control: { type: "number" },
      description:
        "Duration before showing the tooltip if the user moves to another tooltip",
    },
    disableHoverableContent: {
      control: { type: "boolean" },
      description: "Whether to disable hoverable content",
    },
  },
  args: {
    delayDuration: 300,
    skipDelayDuration: 300,
    disableHoverableContent: false,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add tooltip

# Install using pnpm
pnpm dlx shadcn@latest add tooltip

# Install using yarn
yarn dlx shadcn@latest add tooltip

# Install using bun
bunx shadcn@latest add tooltip
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install @radix-ui/react-tooltip
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
type Story = StoryObj<typeof TooltipProvider>;

export const Default: Story = {
  render: (args) => (
    <TooltipProvider {...args}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to calendar</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithDelay: Story = {
  args: {
    delayDuration: 1000,
  },
  render: (args) => (
    <TooltipProvider {...args}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover with Delay</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip has a 1 second delay</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const CustomPosition: Story = {
  render: (args) => (
    <TooltipProvider {...args}>
      <div className="flex space-x-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Tooltip on top</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Tooltip on bottom</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Tooltip on left</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Tooltip on right</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};

export const WithHTML: Story = {
  render: (args) => (
    <TooltipProvider {...args}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover for HTML</Button>
        </TooltipTrigger>
        <TooltipContent>
          <div>
            <h4 className="font-medium">Tooltip Title</h4>
            <p className="text-sm text-muted-foreground">
              This is a description
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
