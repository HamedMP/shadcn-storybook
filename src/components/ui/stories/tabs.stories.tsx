import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof Tabs> = {
  title: "shadcn-ui/components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "text",
      description: "The default selected tab value",
    },
    value: {
      control: "text",
      description: "The controlled selected tab value",
    },
    onValueChange: {
      action: "valueChanged",
      description: "Event handler called when the value changes",
    },
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "The orientation of the tabs",
    },
    dir: {
      control: "radio",
      options: ["ltr", "rtl"],
      description: "The reading direction of the tabs",
    },
    activationMode: {
      control: "radio",
      options: ["automatic", "manual"],
      description: "The activation mode of the tabs",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  args: {
    defaultValue: "account",
    orientation: "horizontal",
    dir: "ltr",
    activationMode: "automatic",
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A set of layered sections of content—known as tab panels—that are displayed one at a time.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add tabs

# Install using pnpm
pnpm dlx shadcn@latest add tabs

# Install using yarn
yarn dlx shadcn@latest add tabs

# Install using bun
bunx shadcn@latest add tabs
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install @radix-ui/react-tabs
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
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-muted-foreground">
          Make changes to your account here. Click save when you're done.
        </p>
        <div className="grid gap-2 py-4">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@johndoe" />
          </div>
        </div>
        <div className="flex">
          <Button>Save changes</Button>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-muted-foreground">
          Change your password here. After saving, you'll be logged out.
        </p>
        <div className="grid gap-2 py-4">
          <div className="space-y-1">
            <Label htmlFor="current">Current password</Label>
            <Input id="current" type="password" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="new">New password</Label>
            <Input id="new" type="password" />
          </div>
        </div>
        <div className="flex">
          <Button>Save password</Button>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const CustomTriggers: Story = {
  render: (args) => (
    <Tabs {...args} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-4 p-5">
          <h3 className="text-lg font-medium">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your account preferences and settings.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-4 p-5">
          <h3 className="text-lg font-medium">Password</h3>
          <p className="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const VerticalTabs: Story = {
  args: {
    orientation: "vertical",
    className: "w-[600px] h-[300px]",
  },
  render: (args) => (
    <Tabs {...args}>
      <div className="flex">
        <TabsList className="flex-col w-[200px] h-full">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <div className="flex-1 px-4">
          <TabsContent value="account" className="h-full">
            <h3 className="text-lg font-medium">Account Settings</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Manage your account preferences and settings.
            </p>
          </TabsContent>
          <TabsContent value="password" className="h-full">
            <h3 className="text-lg font-medium">Password</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Change your password here. After saving, you'll be logged out.
            </p>
          </TabsContent>
          <TabsContent value="settings" className="h-full">
            <h3 className="text-lg font-medium">Settings</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Configure your application settings and preferences.
            </p>
          </TabsContent>
        </div>
      </div>
    </Tabs>
  ),
};

export const WithFormContent: Story = {
  render: (args) => (
    <Tabs {...args} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-4 p-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="example@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Your username" />
          </div>
          <Button className="w-full">Save Account</Button>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-4 p-5">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <Button className="w-full">Change Password</Button>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
