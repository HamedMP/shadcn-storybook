import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const meta: Meta<typeof Accordion> = {
  title: "shadcn-ui/components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    type: {
      control: "radio",
      options: ["single", "multiple"],
      description: "Allow one or multiple items to be open at the same time",
    },
    value: {
      control: "text",
      description: "The controlled value of the accordion item to expand",
    },
    defaultValue: {
      control: "text",
      description: "The initial value of the accordion item to expand",
    },
    onValueChange: {
      action: "valueChanged",
      description: "Event handler called when the expanded state changes",
    },
    collapsible: {
      control: "boolean",
      description: "Allow collapse of open items",
    },
    disabled: {
      control: "boolean",
      description: "Disable the accordion",
    },
    dir: {
      control: "radio",
      options: ["ltr", "rtl"],
      description: "The reading direction of the accordion",
    },
    orientation: {
      control: "radio",
      options: ["vertical", "horizontal"],
      description: "The orientation of the accordion",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
    defaultValue: "item-1",
  },
  render: (args) => (
    <Accordion {...args} dir="rtl" className="w-full max-w-[500px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it unstyled?</AccordionTrigger>
        <AccordionContent>
          Yes. It's unstyled by default, giving you freedom over the look and
          feel.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can it be animated?</AccordionTrigger>
        <AccordionContent>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Accordion {...args} className="w-full max-w-[500px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  render: (args) => (
    <Accordion {...args} className="w-full max-w-[500px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>This item will be disabled.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const DisabledItems: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Accordion {...args} className="w-full max-w-[500px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Regular Item</AccordionTrigger>
        <AccordionContent>This is a regular accordion item.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Disabled Item</AccordionTrigger>
        <AccordionContent>
          You shouldn&apos;t be able to see this content.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Another Regular Item</AccordionTrigger>
        <AccordionContent>
          This is another regular accordion item.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const HorizontalOrientation: Story = {
  args: {
    ...Default.args,
    orientation: "horizontal",
  },
  render: (args) => (
    <Accordion {...args} className="flex w-full max-w-[800px]">
      <AccordionItem
        value="item-1"
        className="border-r border-b-0 last:border-r-0"
      >
        <AccordionTrigger>First</AccordionTrigger>
        <AccordionContent>First panel content</AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="border-r border-b-0 last:border-r-0"
      >
        <AccordionTrigger>Second</AccordionTrigger>
        <AccordionContent>Second panel content</AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="border-r border-b-0 last:border-r-0"
      >
        <AccordionTrigger>Third</AccordionTrigger>
        <AccordionContent>Third panel content</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const RightToLeft: Story = {
  args: {
    ...Default.args,
    dir: "rtl",
  },
  render: (args) => (
    <Accordion {...args} className="w-full max-w-[500px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>RTL First Item</AccordionTrigger>
        <AccordionContent>First item content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>RTL Second Item</AccordionTrigger>
        <AccordionContent>Second item content</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const CustomStyling: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Accordion {...args} className="w-full max-w-[500px]">
      <AccordionItem
        value="item-1"
        className="border-2 border-blue-200 p-2 mb-2 rounded-lg"
      >
        <AccordionTrigger className="text-blue-600 hover:text-blue-800">
          Custom Styled Item
        </AccordionTrigger>
        <AccordionContent className="text-gray-600">
          This accordion item has custom styling applied to demonstrate the
          flexibility of the component.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="border-2 border-green-200 p-2 mb-2 rounded-lg"
      >
        <AccordionTrigger className="text-green-600 hover:text-green-800">
          Another Custom Item
        </AccordionTrigger>
        <AccordionContent className="text-gray-600">
          Different styling can be applied to each accordion item independently.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
