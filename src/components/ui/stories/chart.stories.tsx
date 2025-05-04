import type { Meta, StoryObj } from "@storybook/react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartConfig,
} from "@/components/ui/chart";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
];

const chartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
};

const meta: Meta<typeof ChartContainer> = {
  title: "shadcn-ui/components/Chart",
  component: ChartContainer,
  tags: ["autodocs"],
  argTypes: {
    config: {
      description: "Chart configuration object",
      control: "object",
    },
    className: {
      description: "Additional CSS classes",
      control: "text",
    },
    children: {
      description: "Chart content (BarChart, LineChart, etc.)",
    },
  },
  args: {
    config: chartConfig,
    className: "aspect-[4/3]",
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `Beautiful charts built using Recharts.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add chart

# Install using pnpm
pnpm dlx shadcn@latest add chart

# Install using yarn
yarn dlx shadcn@latest add chart

# Install using bun
bunx shadcn@latest add chart
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install recharts
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
type Story = StoryObj<typeof ChartContainer>;

export const Default: Story = {
  render: (args) => (
    <Card>
      <CardContent className="pt-6">
        <ChartContainer {...args}>
          <BarChart data={chartData}>
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

export const WithGrid: Story = {
  args: {
    className: "aspect-[4/3]",
  },
  render: (args) => (
    <Card>
      <CardContent className="pt-6">
        <ChartContainer {...args}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

export const WithAxis: Story = {
  render: (args) => (
    <Card>
      <CardContent className="pt-6">
        <ChartContainer {...args}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis tickLine={false} tickMargin={10} axisLine={false} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

export const WithTooltip: Story = {
  render: (args) => (
    <Card>
      <CardContent className="pt-6">
        <ChartContainer {...args}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

export const WithLegend: Story = {
  render: (args) => (
    <Card>
      <CardContent className="pt-6">
        <ChartContainer {...args}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

export const LineChartExample: Story = {
  render: (args) => (
    <Card>
      <CardContent className="pt-6">
        <ChartContainer {...args}>
          <LineChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              type="monotone"
              dataKey="desktop"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="mobile"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};

export const WithAccessibility: Story = {
  render: (args) => (
    <Card>
      <CardContent className="pt-6">
        <ChartContainer {...args}>
          <BarChart data={chartData} accessibilityLayer>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  ),
};
