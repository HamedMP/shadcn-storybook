import type { Meta, StoryObj } from "@storybook/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof Popover> = {
  title: "shadcn-ui/components/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "Whether the popover is open by default",
    },
    open: {
      control: "boolean",
      description: "Controlled open state of the popover",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Event handler called when the open state changes",
    },
    modal: {
      control: "boolean",
      description:
        "Whether the popover should be modal (block interactions outside)",
    },
  },
  args: {
    defaultOpen: false,
    modal: false,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Displays rich content in a portal, triggered by a button.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add popover

# Install using pnpm
pnpm dlx shadcn@latest add popover

# Install using yarn
yarn dlx shadcn@latest add popover

# Install using bun
bunx shadcn@latest add popover
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install @radix-ui/react-popover
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
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const PositionLeft: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Left Aligned</Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-72">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Left Aligned Popover</h4>
          <p className="text-sm text-muted-foreground">
            This popover is aligned to the left side of the trigger
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const PositionRight: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Right Aligned</Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-72">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Right Aligned Popover</h4>
          <p className="text-sm text-muted-foreground">
            This popover is aligned to the right side of the trigger
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const CustomSideOffset: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Custom Offset</Button>
      </PopoverTrigger>
      <PopoverContent sideOffset={12} className="w-72">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Custom Side Offset</h4>
          <p className="text-sm text-muted-foreground">
            This popover has a side offset of 12px
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithAnchor: Story = {
  render: (args) => (
    <div className="h-32 flex items-end justify-center">
      <Popover {...args}>
        <PopoverAnchor asChild>
          <div className="h-8 w-8 rounded-full bg-primary" />
        </PopoverAnchor>
        <PopoverTrigger asChild>
          <Button className="ml-20">Open Anchored Popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Anchored Popover</h4>
            <p className="text-sm text-muted-foreground">
              This popover is anchored to a different element than the trigger
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
};
