import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@/components/ui/progress";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";
import * as React from "react";

const meta: Meta<typeof Progress> = {
  title: "shadcn-ui/components/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "The progress value (0-100)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    max: {
      control: "number",
      description: "The maximum value of the progress indicator",
    },
  },
  args: {
    value: 0,
    max: 100,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add progress

# Install using pnpm
pnpm dlx shadcn@latest add progress

# Install using yarn
yarn dlx shadcn@latest add progress

# Install using bun
bunx shadcn@latest add progress
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install @radix-ui/react-progress
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
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 40,
  },
  render: (args) => (
    <div className="w-[60%]">
      <Progress {...args} />
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    value: 60,
  },
  render: (args) => (
    <div className="w-[60%] space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Progress</span>
        <span>{args.value}%</span>
      </div>
      <Progress {...args} />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: (args) => (
    <div className="w-[60%]">
      <Progress className="relative overflow-hidden before:absolute before:inset-0 before:bg-primary before:animate-[progress-loading_2s_ease_infinite]" />
    </div>
  ),
};

export const CustomStyles: Story = {
  args: {
    value: 80,
  },
  render: (args) => (
    <div className="space-y-4 w-[60%]">
      <div>
        <p className="text-sm font-medium mb-1">Default</p>
        <Progress {...args} />
      </div>
      <div>
        <p className="text-sm font-medium mb-1">Taller</p>
        <Progress className="h-4" {...args} />
      </div>
      <div>
        <p className="text-sm font-medium mb-1">Custom colors</p>
        <Progress className="bg-blue-200 [&>div]:bg-blue-600" {...args} />
      </div>
      <div>
        <p className="text-sm font-medium mb-1">Gradient</p>
        <Progress
          className="h-3 [&>div]:bg-gradient-to-r [&>div]:from-indigo-500 [&>div]:to-purple-500"
          {...args}
        />
      </div>
    </div>
  ),
};

export const Animated: Story = {
  render: function AnimatedProgress() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setProgress(progress < 100 ? progress + 5 : 0);
      }, 300);

      return () => clearTimeout(timer);
    }, [progress]);

    return (
      <div className="w-[60%] space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Uploading...</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>
    );
  },
};
