import type { Meta, StoryObj } from "@storybook/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";
import { CaretSortIcon } from "@radix-ui/react-icons";
import * as React from "react";

const meta: Meta<typeof Collapsible> = {
  title: "shadcn-ui/components/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description:
        "The open state of the collapsible when it is initially rendered",
    },
    open: {
      control: "boolean",
      description: "The controlled open state of the collapsible",
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the open state of the collapsible changes",
    },
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the collapsible",
    },
  },
  args: {
    defaultOpen: false,
    disabled: false,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `An interactive component which expands/collapses a panel.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add collapsible

# Install using pnpm
pnpm dlx shadcn@latest add collapsible

# Install using yarn
yarn dlx shadcn@latest add collapsible

# Install using bun
bunx shadcn@latest add collapsible
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install @radix-ui/react-collapsible
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
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <Collapsible
        {...args}
        open={args.open !== undefined ? args.open : isOpen}
        onOpenChange={args.onOpenChange || setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">@shadcn/ui</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <CaretSortIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          An interactive component that makes it easy to hide and show content.
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            The collapsible component consists of a trigger and collapsible
            content.
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Use this component to create expandable sections for hiding and
            showing content.
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const WithCard: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <Collapsible
        {...args}
        open={args.open !== undefined ? args.open : isOpen}
        onOpenChange={args.onOpenChange || setIsOpen}
        className="w-[350px] rounded-md border shadow-sm"
      >
        <div className="flex items-center justify-between p-4">
          <h4 className="text-sm font-semibold">Additional Information</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <CaretSortIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="px-4 pb-4">
          <p className="text-sm text-muted-foreground">
            Click the button to show more details about this topic.
          </p>
        </div>
        <CollapsibleContent>
          <div className="border-t px-4 py-3">
            <div className="space-y-2">
              <p className="text-sm">
                This section contains additional information that is less
                important, but might be useful for some users.
              </p>
              <p className="text-sm">
                Using a collapsible component can help reduce visual clutter and
                make your interface more approachable.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const WithCustomTrigger: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <Collapsible
        {...args}
        open={args.open !== undefined ? args.open : isOpen}
        onOpenChange={args.onOpenChange || setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-semibold">FAQ Item</h4>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm">
              {isOpen ? "Hide" : "Show"} answer
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">
          What is shadcn/ui?
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border bg-muted px-4 py-3 text-sm">
            shadcn/ui is a collection of reusable components built using Radix
            UI and Tailwind CSS. It's not a component library, but a set of
            components you can copy and paste into your apps.
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const Nested: Story = {
  render: (args) => {
    const [outerOpen, setOuterOpen] = React.useState(false);
    const [innerOpen, setInnerOpen] = React.useState(false);

    return (
      <Collapsible
        {...args}
        open={args.open !== undefined ? args.open : outerOpen}
        onOpenChange={args.onOpenChange || setOuterOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">Categories</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <CaretSortIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">Main Category</div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 text-sm">First Item</div>
          <Collapsible
            open={innerOpen}
            onOpenChange={setInnerOpen}
            className="space-y-2 ml-4"
          >
            <div className="flex items-center justify-between">
              <h5 className="text-sm">Subcategories</h5>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <CaretSortIcon className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-2 text-sm">
                Subcategory 1
              </div>
              <div className="rounded-md border px-4 py-2 text-sm">
                Subcategory 2
              </div>
            </CollapsibleContent>
          </Collapsible>
          <div className="rounded-md border px-4 py-3 text-sm">Last Item</div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
