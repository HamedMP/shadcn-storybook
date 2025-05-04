import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Link from "next/link";

import { Badge, badgeVariants } from "@/ui/badge";

const meta: Meta<typeof Badge> = {
  title: "shadcn-ui/components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Displays a badge or a component that looks like a badge.
        
## Installation

\`\`\`bash
# Install using npm
npx shadcn@latest add badge

# Install using pnpm
pnpm dlx shadcn@latest add badge

# Install using yarn
yarn dlx shadcn@latest add badge

# Install using bun
bunx shadcn@latest add badge
\`\`\`

## Import

\`\`\`tsx
import { Badge } from "@/components/ui/badge"

// For link variants
import { badgeVariants } from "@/components/ui/badge"
\`\`\`
`,
      },
    },
  },
  args: {
    children: "Badge",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description: "The visual style variant of the badge",
    },
    asChild: {
      control: "boolean",
      description: "Whether to render as a child component",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default badge example
export const Default: Story = {
  args: {
    variant: "default",
  },
};

// Secondary badge example
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

// Destructive badge example
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

// Outline badge example
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

// Example with an icon
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Success
      </>
    ),
    variant: "default",
  },
};

// Link example using asChild
export const AsLink: Story = {
  args: {
    asChild: true,
    children: <Link href="#">Badge Link</Link>,
  },
};

// Link example using badgeVariants
export const LinkWithVariants: Story = {
  render: () => (
    <Link className={badgeVariants({ variant: "outline" })} href="#">
      Badge with Variants
    </Link>
  ),
};
