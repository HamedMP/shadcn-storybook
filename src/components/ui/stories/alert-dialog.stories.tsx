import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../alert-dialog";

const meta: Meta<typeof AlertDialog> = {
  title: "shadcn-ui/components/AlertDialog",
  component: AlertDialog,
  argTypes: {
    open: {
      control: "boolean",
      description: "Whether the dialog is open",
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onOpenChange: fn(),
  },
  render: function Wrapper(args) {
    const [open, setOpen] = React.useState(false);

    const handleOpenChange = (newOpen: boolean) => {
      setOpen(newOpen);
      args.onOpenChange?.(newOpen);
    };

    return (
      <AlertDialog open={open} onOpenChange={handleOpenChange}>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
};
