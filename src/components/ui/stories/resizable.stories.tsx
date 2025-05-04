import type { Meta, StoryObj } from "@storybook/react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "shadcn-ui/components/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    direction: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "The orientation of the panel group",
    },
    onLayout: {
      action: "onLayout",
      description: "Event handler called when the layout changes",
    },
  },
  args: {
    direction: "horizontal",
    className: "max-w-[800px] rounded-lg border",
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A resizable panel component.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add resizable

# Install using pnpm
pnpm dlx shadcn@latest add resizable

# Install using yarn
yarn dlx shadcn@latest add resizable

# Install using bun
bunx shadcn@latest add resizable
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install react-resizable-panels
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
type Story = StoryObj<typeof ResizablePanelGroup>;

export const Horizontal: Story = {
  render: (args) => (
    <ResizablePanelGroup {...args}>
      <ResizablePanel defaultSize={25}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
  },
  render: (args) => (
    <ResizablePanelGroup {...args}>
      <ResizablePanel defaultSize={25}>
        <div className="flex h-[100px] items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-[300px] items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const ThreePanels: Story = {
  render: (args) => (
    <ResizablePanelGroup {...args}>
      <ResizablePanel defaultSize={20}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">Navigation</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">Main Content</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={20}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">Details</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const WithMinMaxSizes: Story = {
  render: (args) => (
    <ResizablePanelGroup {...args}>
      <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">Min: 15%, Max: 30%</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">Flexible Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const NestedPanels: Story = {
  render: (args) => (
    <ResizablePanelGroup {...args}>
      <ResizablePanel defaultSize={30}>
        <div className="flex h-[400px] items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={70}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={30}>
            <div className="flex h-[120px] items-center justify-center p-6">
              <span className="font-semibold">Top Section</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={70}>
            <div className="flex h-[280px] items-center justify-center p-6">
              <span className="font-semibold">Bottom Section</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
