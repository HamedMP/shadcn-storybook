import type { Meta, StoryObj } from "@storybook/react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";
import * as React from "react";

const meta: Meta<typeof Drawer> = {
  title: "shadcn-ui/components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "The controlled open state of the drawer",
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the open state of the drawer changes",
    },
    direction: {
      control: "radio",
      options: ["top", "bottom", "left", "right"],
      description: "The direction the drawer opens from",
    },
    shouldScaleBackground: {
      control: "boolean",
      description:
        "Whether the background should scale when the drawer is open",
    },
    modal: {
      control: "boolean",
      description:
        "Whether the drawer should block interactions with the page content",
    },
  },
  args: {
    direction: "bottom",
    shouldScaleBackground: true,
    modal: true,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A drawer component that slides in from the edge of the screen.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add drawer

# Install using pnpm
pnpm dlx shadcn@latest add drawer

# Install using yarn
yarn dlx shadcn@latest add drawer

# Install using bun
bunx shadcn@latest add drawer
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install vaul
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
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you're done.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="grid gap-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="John Doe"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="@johndoe"
                  className="col-span-3"
                />
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button>Save changes</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export const TopDirection: Story = {
  args: {
    direction: "top",
  },
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open from Top</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Top Direction</DrawerTitle>
            <DrawerDescription>
              This drawer slides in from the top of the screen.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p className="text-sm">
              The drawer can be configured to appear from any side of the screen
              using the direction prop.
            </p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export const LeftDirection: Story = {
  args: {
    direction: "left",
  },
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open from Left</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="h-full py-6 px-4">
          <DrawerHeader>
            <DrawerTitle>Left Sidebar</DrawerTitle>
            <DrawerDescription>
              This drawer slides in from the left side.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="rounded-md bg-secondary p-3">Home</div>
            <div className="rounded-md bg-secondary p-3">Dashboard</div>
            <div className="rounded-md bg-secondary p-3">Settings</div>
            <div className="rounded-md bg-secondary p-3">Profile</div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export const WithForm: Story = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">Sign Up</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Create an account</DrawerTitle>
            <DrawerDescription>
              Enter your information to create an account
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button>Create account</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export const WithCustomContent: Story = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">View Map</Button>
      </DrawerTrigger>
      <DrawerContent className="h-[80vh]">
        <div className="max-h-full w-full overflow-auto p-0">
          <div className="h-[500px] w-full bg-muted flex items-center justify-center text-muted-foreground">
            <p>Map would be displayed here</p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium">Location Details</h3>
            <p className="text-sm text-muted-foreground mt-2">
              123 Example Street, City, Country
            </p>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm">
                Get Directions
              </Button>
              <Button variant="outline" size="sm">
                Share Location
              </Button>
              <DrawerClose asChild>
                <Button variant="outline" size="sm">
                  Close
                </Button>
              </DrawerClose>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};
