import type { Meta, StoryObj } from "@storybook/react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays } from "lucide-react";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof HoverCard> = {
  title: "shadcn-ui/components/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description:
        "The open state of the hover card when it is initially rendered",
    },
    open: {
      control: "boolean",
      description: "The controlled open state of the hover card",
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the open state of the hover card changes",
    },
    openDelay: {
      control: "number",
      description:
        "The duration from when the mouse enters the trigger until the hover card opens",
    },
    closeDelay: {
      control: "number",
      description:
        "The duration from when the mouse leaves the trigger until the hover card closes",
    },
  },
  args: {
    defaultOpen: false,
    openDelay: 700,
    closeDelay: 300,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `For sighted users to preview content available behind a link.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add hover-card

# Install using pnpm
pnpm dlx shadcn@latest add hover-card

# Install using yarn
yarn dlx shadcn@latest add hover-card

# Install using bun
bunx shadcn@latest add hover-card
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install @radix-ui/react-hover-card
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
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="link">@shadcn</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@shadcn</h4>
            <p className="text-sm">
              The creator of the shadcn/ui component library.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const LeftAligned: Story = {
  render: (args) => (
    <div className="flex justify-end">
      <HoverCard {...args}>
        <HoverCardTrigger asChild>
          <Button variant="link">Left Aligned</Button>
        </HoverCardTrigger>
        <HoverCardContent align="start" className="w-80">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Left Aligned Hover Card</h4>
            <p className="text-sm text-muted-foreground">
              This hover card is aligned to the left side of the trigger
              element.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

export const RightAligned: Story = {
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="link">Right Aligned</Button>
      </HoverCardTrigger>
      <HoverCardContent align="end" className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Right Aligned Hover Card</h4>
          <p className="text-sm text-muted-foreground">
            This hover card is aligned to the right side of the trigger element.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const CustomOffset: Story = {
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="link">Custom Offset</Button>
      </HoverCardTrigger>
      <HoverCardContent sideOffset={12} className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Custom Side Offset</h4>
          <p className="text-sm text-muted-foreground">
            This hover card has a side offset of 12px.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithImage: Story = {
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <span className="text-blue-600 underline cursor-pointer">
          Product Details
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-96">
        <div className="flex flex-col space-y-3">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Product"
            className="rounded-md object-cover w-full h-48"
          />
          <div>
            <h4 className="text-sm font-semibold">Premium Wristwatch</h4>
            <p className="text-sm text-muted-foreground">
              Elegant stainless steel wristwatch with automatic movement.
              Water-resistant up to 100 meters. Available in multiple colors.
            </p>
            <div className="mt-2 flex justify-between">
              <p className="text-sm font-medium">$259.99</p>
              <div className="text-yellow-500 flex">★★★★☆</div>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
