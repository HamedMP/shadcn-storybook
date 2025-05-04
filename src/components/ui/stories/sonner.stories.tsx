import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof Toaster> = {
  title: "shadcn-ui/components/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  decorators: [
    (Story, context) => (
      <>
        <Story />
        <Toaster {...context.args} />
      </>
    ),
  ],
  argTypes: {
    position: {
      control: "select",
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
      description: "The position of the toasts",
    },
    expand: {
      control: "boolean",
      description: "Whether to expand the toasts to fit the content",
    },
    closeButton: {
      control: "boolean",
      description: "Whether to show the close button",
    },
    richColors: {
      control: "boolean",
      description: "Whether to use rich colors for the toasts",
    },
    theme: {
      control: "radio",
      options: ["light", "dark", "system"],
      description: "The theme of the toasts",
    },
  },
  args: {
    position: "bottom-right",
    expand: false,
    closeButton: false,
    richColors: false,
    theme: "system",
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Toast component powered by Sonner.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add sonner

# Install using pnpm
pnpm dlx shadcn@latest add sonner

# Install using yarn
yarn dlx shadcn@latest add sonner

# Install using bun
bunx shadcn@latest add sonner
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install sonner
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
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: (args) => (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
      >
        Show Toast
      </Button>
    </>
  ),
};

export const Success: Story = {
  render: (args) => (
    <>
      <Button
        variant="outline"
        onClick={() => toast.success("Profile updated successfully")}
      >
        Show Success Toast
      </Button>
    </>
  ),
};

export const Error: Story = {
  render: (args) => (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast.error("Something went wrong", {
            description: "There was a problem with your request.",
          })
        }
      >
        Show Error Toast
      </Button>
    </>
  ),
};

export const WithAction: Story = {
  render: (args) => (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event deleted", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast with Action
      </Button>
    </>
  ),
};

export const WithRichColors: Story = {
  args: {
    richColors: true,
  },
  render: (args) => (
    <>
      <div className="flex space-x-2">
        <Button
          variant="outline"
          onClick={() => toast.success("Success toast with rich colors")}
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.error("Error toast with rich colors")}
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.info("Info toast with rich colors")}
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.warning("Warning toast with rich colors")}
        >
          Warning
        </Button>
      </div>
    </>
  ),
};

export const WithCustomPosition: Story = {
  args: {
    position: "top-center",
  },
  render: (args) => (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
      >
        Show Top Center Toast
      </Button>
    </>
  ),
};

interface ToastData {
  name: string;
}

export const WithPromise: Story = {
  render: (args) => (
    <>
      <Button
        variant="outline"
        onClick={() => {
          const promise = new Promise<ToastData>((resolve) => {
            setTimeout(() => resolve({ name: "Sonner" }), 2000);
          });

          toast.promise(promise, {
            loading: "Loading...",
            success: (data) => {
              return `Data loaded successfully: ${data.name}`;
            },
            error: "Error loading data",
          });
        }}
      >
        Show Promise Toast
      </Button>
    </>
  ),
};
