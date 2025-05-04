import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card as CardComponent,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof Skeleton> = {
  title: "shadcn-ui/components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Use to show a placeholder while content is loading.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add skeleton

# Install using pnpm
pnpm dlx shadcn@latest add skeleton

# Install using yarn
yarn dlx shadcn@latest add skeleton

# Install using bun
bunx shadcn@latest add skeleton
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
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: (args) => <Skeleton className="h-[20px] w-[200px]" {...args} />,
};

export const Circle: Story = {
  render: (args) => <Skeleton className="h-12 w-12 rounded-full" {...args} />,
};

export const Rectangle: Story = {
  render: (args) => <Skeleton className="h-8 w-[250px]" {...args} />,
};

export const CardSkeleton: Story = {
  render: (args) => (
    <CardComponent className="w-[350px]">
      <CardHeader className="gap-2">
        <Skeleton className="h-5 w-1/5" {...args} />
        <Skeleton className="h-4 w-4/5" {...args} />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Skeleton className="h-24 w-full" {...args} />
        <Skeleton className="h-4 w-full" {...args} />
        <Skeleton className="h-4 w-4/5" {...args} />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-28" {...args} />
      </CardFooter>
    </CardComponent>
  ),
};

export const UserProfile: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" {...args} />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" {...args} />
        <Skeleton className="h-4 w-[200px]" {...args} />
      </div>
    </div>
  ),
};

export const TableRow: Story = {
  render: (args) => (
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" {...args} />
      <Skeleton className="h-4 w-full" {...args} />
      <Skeleton className="h-4 w-full" {...args} />
      <Skeleton className="h-4 w-full" {...args} />
      <Skeleton className="h-4 w-3/4" {...args} />
    </div>
  ),
};

export const Grid: Story = {
  render: (args) => (
    <div className="grid grid-cols-3 gap-4">
      <Skeleton className="h-16 w-full" {...args} />
      <Skeleton className="h-16 w-full" {...args} />
      <Skeleton className="h-16 w-full" {...args} />
      <Skeleton className="h-16 w-full" {...args} />
      <Skeleton className="h-16 w-full" {...args} />
      <Skeleton className="h-16 w-full" {...args} />
    </div>
  ),
};
