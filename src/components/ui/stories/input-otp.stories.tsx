import type { Meta, StoryObj } from "@storybook/react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";
import * as React from "react";

const meta: Meta<typeof InputOTP> = {
  title: "shadcn-ui/components/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
  argTypes: {
    maxLength: {
      control: "number",
      description: "The maximum number of characters allowed",
    },
    value: {
      control: "text",
      description: "The controlled value of the OTP input",
    },
    defaultValue: {
      control: "text",
      description: "The default value of the OTP input",
    },
    disabled: {
      control: "boolean",
      description: "Whether the OTP input is disabled",
    },
    placeholder: {
      control: "text",
      description: "The placeholder character for empty slots",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the OTP input",
    },
    containerClassName: {
      control: "text",
      description: "Additional CSS classes for the OTP input container",
    },
  },
  args: {
    maxLength: 6,
    disabled: false,
    placeholder: "○",
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A one-time password input for entering verification codes.
        
## Installation

\`\`\`
# Install using npm
npx shadcn@latest add input-otp

# Install using pnpm
pnpm dlx shadcn@latest add input-otp

# Install using yarn
yarn dlx shadcn@latest add input-otp

# Install using bun
bunx shadcn@latest add input-otp
\`\`\`

## Dependencies

This component requires the following dependencies:
\`\`\`
npm install input-otp
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
type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");

    return (
      <div className="space-y-2">
        <InputOTP
          {...args}
          value={value}
          onChange={setValue}
          children={undefined}
          render={({ slots }) => (
            <InputOTPGroup>
              {slots.map((slot, index) => (
                <InputOTPSlot key={index} {...slot} index={index} />
              ))}
            </InputOTPGroup>
          )}
        />
        <div className="text-sm text-muted-foreground">
          Value: {value || "(empty)"}
        </div>
      </div>
    );
  },
};

export const WithSeparator: Story = {
  args: {
    maxLength: 6,
  },
  render: (args) => {
    const [value, setValue] = React.useState("");

    return (
      <div className="space-y-2">
        <InputOTP
          {...args}
          value={value}
          onChange={setValue}
          children={undefined}
          render={({ slots }) => (
            <InputOTPGroup>
              <InputOTPSlot {...slots[0]} index={0} />
              <InputOTPSlot {...slots[1]} index={1} />
              <InputOTPSlot {...slots[2]} index={2} />
              <InputOTPSeparator />
              <InputOTPSlot {...slots[3]} index={3} />
              <InputOTPSlot {...slots[4]} index={4} />
              <InputOTPSlot {...slots[5]} index={5} />
            </InputOTPGroup>
          )}
        />
        <div className="text-sm text-muted-foreground">
          Value: {value || "(empty)"}
        </div>
      </div>
    );
  },
};

export const Pattern: Story = {
  args: {
    maxLength: 4,
    pattern: "^[0-9]+$",
  },
  render: (args) => {
    const [value, setValue] = React.useState("");

    return (
      <div className="space-y-2">
        <InputOTP
          {...args}
          value={value}
          onChange={setValue}
          children={undefined}
          render={({ slots }) => (
            <InputOTPGroup>
              {slots.map((slot, index) => (
                <InputOTPSlot key={index} {...slot} index={index} />
              ))}
            </InputOTPGroup>
          )}
        />
        <div className="text-sm text-muted-foreground">
          Value: {value || "(empty)"} (numbers only)
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    maxLength: 6,
    disabled: true,
    defaultValue: "123456",
  },
  render: (args) => (
    <InputOTP
      {...args}
      children={undefined}
      render={({ slots }) => (
        <InputOTPGroup>
          {slots.map((slot, index) => (
            <InputOTPSlot key={index} {...slot} index={index} />
          ))}
        </InputOTPGroup>
      )}
    />
  ),
};

export const CustomStyles: Story = {
  args: {
    maxLength: 4,
  },
  render: (args) => {
    const [value, setValue] = React.useState("");

    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-sm font-medium">Default</div>
          <InputOTP
            {...args}
            value={value}
            onChange={setValue}
            children={undefined}
            render={({ slots }) => (
              <InputOTPGroup>
                {slots.map((slot, index) => (
                  <InputOTPSlot key={index} {...slot} index={index} />
                ))}
              </InputOTPGroup>
            )}
          />
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Custom size</div>
          <InputOTP
            {...args}
            value={value}
            onChange={setValue}
            children={undefined}
            render={({ slots }) => (
              <InputOTPGroup>
                {slots.map((slot, index) => (
                  <InputOTPSlot
                    key={index}
                    {...slot}
                    index={index}
                    className="h-12 w-12 text-xl"
                  />
                ))}
              </InputOTPGroup>
            )}
          />
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Custom shape</div>
          <InputOTP
            {...args}
            value={value}
            onChange={setValue}
            children={undefined}
            render={({ slots }) => (
              <InputOTPGroup>
                {slots.map((slot, index) => (
                  <InputOTPSlot
                    key={index}
                    {...slot}
                    index={index}
                    className="rounded-full"
                  />
                ))}
              </InputOTPGroup>
            )}
          />
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Custom colors</div>
          <InputOTP
            {...args}
            value={value}
            onChange={setValue}
            children={undefined}
            render={({ slots }) => (
              <InputOTPGroup>
                {slots.map((slot, index) => (
                  <InputOTPSlot
                    key={index}
                    {...slot}
                    index={index}
                    className="bg-primary/10 border-primary/20 data-[active=true]:border-primary data-[active=true]:ring-primary/30"
                  />
                ))}
              </InputOTPGroup>
            )}
          />
        </div>
      </div>
    );
  },
};

export const VerificationCode: Story = {
  render: () => {
    const [value, setValue] = React.useState("");
    const [isVerifying, setIsVerifying] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const handleComplete = React.useCallback((value: string) => {
      setIsVerifying(true);
      // Simulate verification delay
      setTimeout(() => {
        setIsVerifying(false);
        setIsSuccess(value === "123456");
      }, 1500);
    }, []);

    React.useEffect(() => {
      if (value.length === 6) {
        handleComplete(value);
      } else {
        setIsSuccess(false);
      }
    }, [value, handleComplete]);

    return (
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <div className="text-lg font-medium">Verify your email</div>
          <div className="text-sm text-muted-foreground">
            We've sent a 6-digit code to your email
          </div>
        </div>

        <InputOTP
          maxLength={6}
          value={value}
          onChange={setValue}
          children={undefined}
          disabled={isVerifying}
          render={({ slots }) => (
            <InputOTPGroup>
              {slots.map((slot, index) => (
                <InputOTPSlot key={index} {...slot} index={index} />
              ))}
            </InputOTPGroup>
          )}
        />

        {isVerifying && (
          <div className="text-sm text-center text-muted-foreground">
            Verifying...
          </div>
        )}

        {!isVerifying && isSuccess && (
          <div className="text-sm text-center text-green-500">
            Verification successful!
          </div>
        )}

        {!isVerifying && value.length === 6 && !isSuccess && (
          <div className="text-sm text-center text-destructive">
            Invalid verification code. Please try again.
          </div>
        )}

        <div className="text-xs text-center text-muted-foreground">
          Hint: The correct code is 123456
        </div>
      </div>
    );
  },
};
