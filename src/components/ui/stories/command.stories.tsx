import type { Meta, StoryObj } from "@storybook/react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";
import { Button } from "@/components/ui/button";
import { CalendarIcon, SettingsIcon, TrashIcon, UserIcon } from "lucide-react";
import * as React from "react";

const meta: Meta<typeof Command> = {
  title: "shadcn-ui/components/Command",
  component: Command,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    loop: {
      control: "boolean",
      description: "Whether to loop through the items when navigating",
    },
    shouldFilter: {
      control: "boolean",
      description: "Whether to filter items based on the input value",
    },
  },
  args: {
    loop: true,
    shouldFilter: true,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Fast, composable, unstyled command menu for React.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add command

# Install using pnpm
pnpm dlx shadcn@latest add command

# Install using yarn
yarn dlx shadcn@latest add command

# Install using bun
bunx shadcn@latest add command
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install cmdk
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
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md" {...args}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <SettingsIcon className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>
            <TrashIcon className="mr-2 h-4 w-4" />
            <span>Delete</span>
            <CommandShortcut>⌘⌫</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const WithDialog: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)} variant="outline">
          Open Command Menu
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command {...args}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Actions">
                <CommandItem>
                  <TrashIcon className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                  <CommandShortcut>⌘⌫</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </>
    );
  },
};

export const SearchDemo: Story = {
  render: (args) => {
    const frameworks = [
      {
        value: "next.js",
        label: "Next.js",
      },
      {
        value: "sveltekit",
        label: "SvelteKit",
      },
      {
        value: "nuxt",
        label: "Nuxt",
      },
      {
        value: "remix",
        label: "Remix",
      },
      {
        value: "astro",
        label: "Astro",
      },
      {
        value: "wordpress",
        label: "WordPress",
      },
    ];
    const [value, setValue] = React.useState("");

    return (
      <Command className="rounded-lg border shadow-md w-[400px]" {...args}>
        <CommandInput
          placeholder="Search frameworks..."
          value={value}
          onValueChange={setValue}
        />
        <CommandList>
          <CommandEmpty>No frameworks found.</CommandEmpty>
          <CommandGroup>
            {frameworks
              .filter((framework) =>
                framework.label.toLowerCase().includes(value.toLowerCase())
              )
              .map((framework) => (
                <CommandItem
                  key={framework.value}
                  onSelect={() => {
                    setValue("");
                    alert(`Selected ${framework.label}`);
                  }}
                >
                  {framework.label}
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </Command>
    );
  },
};

export const MultipleGroups: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md w-[400px]" {...args}>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="General">
          <CommandItem>
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </CommandItem>
          <CommandItem>
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <SettingsIcon className="mr-2 h-4 w-4" />
            <span>Account</span>
          </CommandItem>
          <CommandItem>
            <SettingsIcon className="mr-2 h-4 w-4" />
            <span>Notifications</span>
          </CommandItem>
          <CommandItem>
            <SettingsIcon className="mr-2 h-4 w-4" />
            <span>Appearance</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Help">
          <CommandItem>
            <span>Documentation</span>
          </CommandItem>
          <CommandItem>
            <span>Support</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
