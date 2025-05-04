"use client";

import * as React from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeTabs } from "@/components/code-tabs";
import { TabsContent } from "@/components/ui/tabs";

interface NpmCommands {
  __npmCommand__?: string;
  __yarnCommand__?: string;
  __pnpmCommand__?: string;
  __bunCommand__?: string;
}

export function CodeBlockCommand({
  __npmCommand__,
  __yarnCommand__,
  __pnpmCommand__,
  __bunCommand__,
}: NpmCommands) {
  const [hasCopied, setHasCopied] = React.useState(false);
  const [packageManager, setPackageManager] = React.useState<string>("npm");

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  const commands = React.useMemo(() => {
    return {
      npm: __npmCommand__,
      pnpm: __pnpmCommand__,
      yarn: __yarnCommand__,
      bun: __bunCommand__,
    };
  }, [__npmCommand__, __pnpmCommand__, __yarnCommand__, __bunCommand__]);

  const copyCommand = React.useCallback(() => {
    const command = commands[packageManager as keyof typeof commands];
    if (!command) return;

    navigator.clipboard.writeText(command);
    setHasCopied(true);
  }, [packageManager, commands]);

  return (
    <div className="relative mt-4 max-h-[650px] overflow-x-auto rounded-xl p-2">
      <CodeTabs
        packageManager={packageManager as "npm" | "pnpm" | "yarn" | "bun"}
        onPackageManagerChange={setPackageManager}
      >
        {Object.entries(commands).map(([key, value]) => (
          <TabsContent key={key} value={key} className="mt-0">
            <pre className="px-4 py-5">
              <code className="relative font-mono text-sm leading-none">
                {value}
              </code>
            </pre>
          </TabsContent>
        ))}
      </CodeTabs>
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-2.5 top-2 z-10 h-6 w-6 hover:bg-zinc-700 [&_svg]:h-3 [&_svg]:w-3"
        onClick={copyCommand}
      >
        <span className="sr-only">Copy</span>
        {hasCopied ? <CheckIcon /> : <CopyIcon />}
      </Button>
    </div>
  );
}
