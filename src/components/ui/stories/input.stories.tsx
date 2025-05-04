import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon, SearchIcon } from "lucide-react";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";
import * as React from "react";

const meta: Meta<typeof Input> = {
  title: "shadcn-ui/components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: [
        "text",
        "email",
        "password",
        "number",
        "search",
        "tel",
        "url",
        "date",
        "time",
        "file",
      ],
      description: "The type of the input",
    },
    placeholder: {
      control: "text",
      description: "The placeholder text",
    },
    value: {
      control: "text",
      description: "The controlled value of the input",
    },
    defaultValue: {
      control: "text",
      description: "The default value of the input",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether the input is required",
    },
    readOnly: {
      control: "boolean",
      description: "Whether the input is read-only",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  args: {
    type: "text",
    placeholder: "Enter text...",
    disabled: false,
    required: false,
    readOnly: false,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Displays a form input field or a component that looks like an input field.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add input

# Install using pnpm
pnpm dlx shadcn@latest add input

# Install using yarn
yarn dlx shadcn@latest add input

# Install using bun
bunx shadcn@latest add input
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
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input className="w-[300px]" {...args} />,
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Email" {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "This input is disabled",
  },
  render: (args) => <Input className="w-[300px]" {...args} />,
};

export const WithIcon: Story = {
  render: (args) => (
    <div className="relative w-[300px]">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input type="search" placeholder="Search..." className="pl-8" {...args} />
    </div>
  ),
};

export const File: Story = {
  args: {
    type: "file",
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="file">Upload file</Label>
      <Input id="file" {...args} />
    </div>
  ),
};

export const PasswordWithToggle: Story = {
  render: (args) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div className="relative w-[300px]">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          className="pr-10"
          {...args}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOffIcon className="h-4 w-4" />
          ) : (
            <EyeIcon className="h-4 w-4" />
          )}
          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </Button>
      </div>
    );
  },
};

export const WithValidation: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="invalid-input">Username</Label>
      <Input
        id="invalid-input"
        aria-invalid="true"
        placeholder="Invalid input"
        {...args}
      />
      <p className="text-sm text-destructive">
        This username is already taken.
      </p>
    </div>
  ),
};

export const FormExample: Story = {
  render: (args) => (
    <form className="space-y-4 w-full max-w-sm">
      <div className="space-y-1.5">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="email-address">Email</Label>
        <Input id="email-address" type="email" placeholder="Enter your email" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  ),
};
