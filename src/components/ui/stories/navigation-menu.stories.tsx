import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";
import * as React from "react";
import { cn } from "@/lib/utils";

const meta: Meta<typeof NavigationMenu> = {
  title: "shadcn-ui/components/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "text",
      description: "The default value of the menu",
    },
    value: {
      control: "text",
      description: "The controlled value of the menu",
    },
    onValueChange: {
      action: "valueChanged",
      description: "Event handler called when the value changes",
    },
    delayDuration: {
      control: "number",
      description:
        "The duration from when the mouse enters the trigger until the content opens",
    },
    skipDelayDuration: {
      control: "number",
      description:
        "How long the user has after leaving the menu before the delay is restarted",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    viewport: {
      control: "boolean",
      description: "Whether to show the viewport",
    },
  },
  args: {
    defaultValue: undefined,
    delayDuration: 200,
    skipDelayDuration: 300,
    viewport: true,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A collection of links for navigating websites.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add navigation-menu

# Install using pnpm
pnpm dlx shadcn@latest add navigation-menu

# Install using yarn
yarn dlx shadcn@latest add navigation-menu

# Install using bun
bunx shadcn@latest add navigation-menu
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install @radix-ui/react-navigation-menu
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
type Story = StoryObj<typeof NavigationMenu>;

// ListItem component for examples
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export const Default: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="#"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="#" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="#" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="#" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href="#"
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const WithoutViewport: Story = {
  args: {
    viewport: false,
  },
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu Item 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4">
              <ListItem title="Item 1" href="#">
                Description for item 1
              </ListItem>
              <ListItem title="Item 2" href="#">
                Description for item 2
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu Item 2</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4">
              <ListItem title="Item 3" href="#">
                Description for item 3
              </ListItem>
              <ListItem title="Item 4" href="#">
                Description for item 4
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const Horizontal: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList className="flex-row">
        {["Home", "Products", "About", "Contact"].map((item) => (
          <NavigationMenuItem key={item}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href="#"
            >
              {item}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const CustomStyling: Story = {
  render: (args) => (
    <NavigationMenu {...args} className="max-w-none w-full">
      <NavigationMenuList className="w-full justify-between px-4 border-b bg-background">
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              "font-bold text-primary"
            )}
            href="#"
          >
            Brand Logo
          </NavigationMenuLink>
        </NavigationMenuItem>

        <div className="flex">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-4">
                <ListItem title="Product 1" href="#">
                  Details about product 1
                </ListItem>
                <ListItem title="Product 2" href="#">
                  Details about product 2
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href="#"
            >
              Solutions
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href="#"
            >
              Resources
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>

        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
            href="#"
          >
            Sign In
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

const components = [
  {
    title: "Alert Dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    description:
      "Displays an indicator showing the completion progress of a task.",
  },
  {
    title: "Scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    description:
      "A set of layered sections of content, known as tab panels, that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
