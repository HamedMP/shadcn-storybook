import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { addDays, addMonths, format } from "date-fns";
import * as React from "react";
import { DateRange } from "react-day-picker";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const meta: Meta<typeof Calendar> = {
  title: "shadcn-ui/components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A date field component that allows users to enter and edit date. Built on top of [React DayPicker](https://react-day-picker.js.org).
        
## Installation

\`\`\`bash
# Install using npm
npx shadcn@latest add calendar

# Install using pnpm
pnpm dlx shadcn@latest add calendar

# Install using yarn
yarn dlx shadcn@latest add calendar

# Install using bun
bunx shadcn@latest add calendar
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`bash
npm install react-day-picker@8.10.1 date-fns
\`\`\`
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

export const WithRange: Story = {
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 7),
    });
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        className="rounded-md border"
        numberOfMonths={2}
      />
    );
  },
};

export const WithMultiple: Story = {
  render: () => {
    const [dates, setDates] = React.useState<Date[] | undefined>([
      new Date(),
      addDays(new Date(), 3),
      addDays(new Date(), 5),
    ]);
    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-md border"
      />
    );
  },
};

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

export const InForm: Story = {
  render: () => {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
      console.log(data);
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <FormControl>
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </FormControl>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) =>
          date > new Date() || date < addMonths(new Date(), -1)
        }
      />
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        footer={
          <div className="p-3 border-t">
            <p className="text-sm text-center">
              {date ? format(date, "PPP") : "No date selected"}
            </p>
          </div>
        }
      />
    );
  },
};
