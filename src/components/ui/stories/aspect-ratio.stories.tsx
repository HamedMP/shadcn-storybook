import { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";
import { AspectRatio } from "../aspect-ratio";

const meta: Meta<typeof AspectRatio> = {
  title: "shadcn-ui/components/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ratio: {
      control: "number",
      description: "The desired ratio of width to height (e.g., 16/9, 4/3, 1)",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "450px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
    ),
  },
};

export const Square: Story = {
  args: {
    ratio: 1,
    children: (
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
    ),
  },
};

export const Portrait: Story = {
  args: {
    ratio: 3 / 4,
    children: (
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
    ),
  },
};

export const Video: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full rounded-md"
      />
    ),
  },
};
