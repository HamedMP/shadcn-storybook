import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import {
  ChevronDown,
  ChevronUp,
  CircleUser,
  Clock,
  FileText,
  Home,
  Info,
  LayoutDashboard,
  List,
  MailIcon,
  Plus,
  Settings,
  Settings2,
  User2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof Sidebar> = {
  title: "shadcn-ui/components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `A composable, themeable and customizable sidebar component.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add sidebar

# Install using pnpm
pnpm dlx shadcn@latest add sidebar

# Install using yarn
yarn dlx shadcn@latest add sidebar

# Install using bun
bunx shadcn@latest add sidebar
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
type Story = StoryObj<typeof Sidebar>;

const projects = [
  {
    name: "Home",
    url: "#",
    icon: Home,
  },
  {
    name: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    name: "Mail",
    url: "#",
    icon: MailIcon,
  },
  {
    name: "Documents",
    url: "#",
    icon: FileText,
  },
  {
    name: "Settings",
    url: "#",
    icon: Settings,
  },
];

export const Default: Story = {
  render: () => {
    return (
      <div className="flex min-h-screen">
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader>
              <div className="flex items-center gap-2 px-2 py-1.5">
                <CircleUser className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Acme Inc</div>
                  <div className="text-xs text-muted-foreground">Workspace</div>
                </div>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {projects.map((project) => (
                      <SidebarMenuItem key={project.name}>
                        <SidebarMenuButton
                          tooltip={project.name}
                          isActive={project.name === "Home"}
                        >
                          <project.icon />
                          <span>{project.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarSeparator />
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Support">
                    <User2 />
                    <span>Account</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
          </Sidebar>
          <div className="p-4">
            <SidebarTrigger className="mb-4" />
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
              <p className="text-muted-foreground">
                This is the main content area. You can toggle the sidebar using
                the button above, or by pressing CMD+B on macOS or CTRL+B on
                Windows.
              </p>
            </div>
          </div>
        </SidebarProvider>
      </div>
    );
  },
};

export const VariantFloating: Story = {
  render: () => {
    return (
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        <SidebarProvider>
          <Sidebar variant="floating">
            <SidebarHeader>
              <div className="flex items-center gap-2 px-2 py-1.5">
                <CircleUser className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Acme Inc</div>
                  <div className="text-xs text-muted-foreground">Workspace</div>
                </div>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {projects.map((project) => (
                      <SidebarMenuItem key={project.name}>
                        <SidebarMenuButton
                          tooltip={project.name}
                          isActive={project.name === "Home"}
                        >
                          <project.icon />
                          <span>{project.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarSeparator />
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Support">
                    <User2 />
                    <span>Account</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
          </Sidebar>
          <div className="p-4">
            <SidebarTrigger className="mb-4" />
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-4">Floating Sidebar</h1>
              <p className="text-muted-foreground">
                This is an example of the floating sidebar variant.
              </p>
            </div>
          </div>
        </SidebarProvider>
      </div>
    );
  },
};

export const VariantInset: Story = {
  render: () => {
    return (
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        <SidebarProvider>
          <Sidebar variant="inset">
            <SidebarHeader>
              <div className="flex items-center gap-2 px-2 py-1.5">
                <CircleUser className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Acme Inc</div>
                  <div className="text-xs text-muted-foreground">Workspace</div>
                </div>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {projects.map((project) => (
                      <SidebarMenuItem key={project.name}>
                        <SidebarMenuButton
                          tooltip={project.name}
                          isActive={project.name === "Home"}
                        >
                          <project.icon />
                          <span>{project.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
          </Sidebar>
          <div className="flex-1 p-4 bg-background rounded-lg shadow-sm m-2 ml-0 md:peer-data-[state=collapsed]:ml-2">
            <SidebarTrigger className="mb-4" />
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-4">Inset Sidebar</h1>
              <p className="text-muted-foreground">
                This is an example of the inset sidebar variant.
              </p>
            </div>
          </div>
        </SidebarProvider>
      </div>
    );
  },
};

export const CollapsibleIcon: Story = {
  render: () => {
    return (
      <div className="flex min-h-screen">
        <SidebarProvider>
          <Sidebar collapsible="icon">
            <SidebarHeader>
              <div className="flex items-center gap-2 px-2 py-1.5">
                <CircleUser className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Acme Inc</div>
                  <div className="text-xs text-muted-foreground">Workspace</div>
                </div>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {projects.map((project) => (
                      <SidebarMenuItem key={project.name}>
                        <SidebarMenuButton
                          tooltip={project.name}
                          isActive={project.name === "Home"}
                        >
                          <project.icon />
                          <span>{project.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
          </Sidebar>
          <div className="p-4">
            <SidebarTrigger className="mb-4" />
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-4">Icon Sidebar</h1>
              <p className="text-muted-foreground">
                This sidebar collapses to icons. You can toggle between the
                expanded and collapsed states using the button above.
              </p>
            </div>
          </div>
        </SidebarProvider>
      </div>
    );
  },
};

export const CollapsibleOffcanvas: Story = {
  render: () => {
    return (
      <div className="flex min-h-screen">
        <SidebarProvider>
          <Sidebar collapsible="offcanvas">
            <SidebarHeader>
              <div className="flex items-center gap-2 px-2 py-1.5">
                <CircleUser className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Acme Inc</div>
                  <div className="text-xs text-muted-foreground">Workspace</div>
                </div>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {projects.map((project) => (
                      <SidebarMenuItem key={project.name}>
                        <SidebarMenuButton
                          tooltip={project.name}
                          isActive={project.name === "Home"}
                        >
                          <project.icon />
                          <span>{project.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
          </Sidebar>
          <div className="p-4">
            <SidebarTrigger className="mb-4" />
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-4">Offcanvas Sidebar</h1>
              <p className="text-muted-foreground">
                This sidebar collapses completely off-canvas. You can toggle the
                sidebar using the button above.
              </p>
            </div>
          </div>
        </SidebarProvider>
      </div>
    );
  },
};

export const WithSearch: Story = {
  render: () => {
    return (
      <div className="flex min-h-screen">
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader>
              <div className="flex items-center gap-2 px-2 py-1.5">
                <CircleUser className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Acme Inc</div>
                  <div className="text-xs text-muted-foreground">Workspace</div>
                </div>
              </div>
              <SidebarInput placeholder="Search..." />
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {projects.map((project) => (
                      <SidebarMenuItem key={project.name}>
                        <SidebarMenuButton
                          tooltip={project.name}
                          isActive={project.name === "Home"}
                        >
                          <project.icon />
                          <span>{project.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
          </Sidebar>
          <div className="p-4">
            <SidebarTrigger className="mb-4" />
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-4">Search in Sidebar</h1>
              <p className="text-muted-foreground">
                This sidebar includes a search input in the header.
              </p>
            </div>
          </div>
        </SidebarProvider>
      </div>
    );
  },
};

export const WithGroupAction: Story = {
  render: () => {
    return (
      <div className="flex min-h-screen">
        <SidebarProvider>
          <Sidebar>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Projects</SidebarGroupLabel>
                <SidebarGroupAction>
                  <Plus />
                  <span className="sr-only">Add Project</span>
                </SidebarGroupAction>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {projects.slice(0, 3).map((project) => (
                      <SidebarMenuItem key={project.name}>
                        <SidebarMenuButton>
                          <project.icon />
                          <span>{project.name}</span>
                        </SidebarMenuButton>
                        <SidebarMenuAction showOnHover>
                          <Settings2 />
                          <span className="sr-only">Settings</span>
                        </SidebarMenuAction>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
          </Sidebar>
          <div className="p-4">
            <SidebarTrigger className="mb-4" />
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-4">Group with Action</h1>
              <p className="text-muted-foreground">
                This sidebar has a group with an action button in the corner and
                menu items with action buttons that appear on hover.
              </p>
            </div>
          </div>
        </SidebarProvider>
      </div>
    );
  },
};

export const WithCollapsibleGroup: Story = {
  render: () => {
    return (
      <div className="flex min-h-screen">
        <SidebarProvider>
          <Sidebar>
            <SidebarContent>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroup>
                  <SidebarGroupLabel asChild>
                    <CollapsibleTrigger className="flex w-full items-center justify-between">
                      Projects
                      <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {projects.slice(0, 3).map((project) => (
                          <SidebarMenuItem key={project.name}>
                            <SidebarMenuButton>
                              <project.icon />
                              <span>{project.name}</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
              <Collapsible className="group/collapsible">
                <SidebarGroup>
                  <SidebarGroupLabel asChild>
                    <CollapsibleTrigger className="flex w-full items-center justify-between">
                      Settings
                      <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <Settings />
                            <span>General</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <User2 />
                            <span>Account</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
            </SidebarContent>
            <SidebarRail />
          </Sidebar>
          <div className="p-4">
            <SidebarTrigger className="mb-4" />
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-4">Collapsible Groups</h1>
              <p className="text-muted-foreground">
                This sidebar has collapsible groups that can be expanded and
                collapsed.
              </p>
            </div>
          </div>
        </SidebarProvider>
      </div>
    );
  },
};

export const WithSubMenu: Story = {
  render: () => {
    return (
      <div className="flex min-h-screen">
        <SidebarProvider>
          <Sidebar>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Home />
                        <span>Home</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <Collapsible className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton>
                            <FileText />
                            <span>Documents</span>
                            <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            <SidebarMenuSubItem>
                              <SidebarMenuSubButton>
                                <span>Personal</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                            <SidebarMenuSubItem>
                              <SidebarMenuSubButton>
                                <span>Work</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                            <SidebarMenuSubItem>
                              <SidebarMenuSubButton>
                                <span>Financial</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Settings />
                        <span>Settings</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
          </Sidebar>
          <div className="p-4">
            <SidebarTrigger className="mb-4" />
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-4">Submenu</h1>
              <p className="text-muted-foreground">
                This sidebar has a submenu for the Documents section.
              </p>
            </div>
          </div>
        </SidebarProvider>
      </div>
    );
  },
};

export const WithBadges: Story = {
  render: () => {
    return (
      <div className="flex min-h-screen">
        <SidebarProvider>
          <Sidebar>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Notifications</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <MailIcon />
                        <span>Inbox</span>
                      </SidebarMenuButton>
                      <SidebarMenuBadge>5</SidebarMenuBadge>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Clock />
                        <span>Recent</span>
                      </SidebarMenuButton>
                      <SidebarMenuBadge>12</SidebarMenuBadge>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Info />
                        <span>Important</span>
                      </SidebarMenuButton>
                      <SidebarMenuBadge>3</SidebarMenuBadge>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
          </Sidebar>
          <div className="p-4">
            <SidebarTrigger className="mb-4" />
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-4">Badges</h1>
              <p className="text-muted-foreground">
                This sidebar shows badges for notification counts.
              </p>
            </div>
          </div>
        </SidebarProvider>
      </div>
    );
  },
};

export const WithFooterDropdown: Story = {
  render: () => {
    return (
      <div className="flex min-h-screen">
        <SidebarProvider>
          <Sidebar>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {projects.map((project) => (
                      <SidebarMenuItem key={project.name}>
                        <SidebarMenuButton>
                          <project.icon />
                          <span>{project.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarSeparator />
              <SidebarMenu>
                <SidebarMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton>
                        <User2 />
                        <span>John Doe</span>
                        <ChevronUp className="ml-auto h-4 w-4" />
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="top"
                      className="w-[--radix-popper-anchor-width]"
                    >
                      <DropdownMenuItem>
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Sign out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
          </Sidebar>
          <div className="p-4">
            <SidebarTrigger className="mb-4" />
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-4">Footer with Dropdown</h1>
              <p className="text-muted-foreground">
                This sidebar has a footer with a dropdown menu for user account
                options.
              </p>
            </div>
          </div>
        </SidebarProvider>
      </div>
    );
  },
};

export const WithLoading: Story = {
  render: () => {
    return (
      <div className="flex min-h-screen">
        <SidebarProvider>
          <Sidebar>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Projects</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <SidebarMenuItem key={index}>
                        <SidebarMenuSkeleton showIcon />
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarSeparator />
              <SidebarGroup>
                <SidebarGroupLabel>Recent</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <SidebarMenuItem key={index}>
                        <SidebarMenuSkeleton />
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
          </Sidebar>
          <div className="p-4">
            <SidebarTrigger className="mb-4" />
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-4">Loading State</h1>
              <p className="text-muted-foreground">
                This sidebar demonstrates a loading state using skeletons.
              </p>
            </div>
          </div>
        </SidebarProvider>
      </div>
    );
  },
};
