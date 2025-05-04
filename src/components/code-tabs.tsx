"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CodeTabsProps extends React.ComponentProps<typeof Tabs> {
  packageManager?: "npm" | "pnpm" | "yarn" | "bun";
  onPackageManagerChange?: (value: string) => void;
}

export function CodeTabs({
  packageManager = "npm",
  onPackageManagerChange,
  children,
  ...props
}: CodeTabsProps) {
  return (
    <Tabs
      value={packageManager}
      onValueChange={onPackageManagerChange}
      className="relative mt-4"
      {...props}
    >
      <TabsList className="w-full justify-start rounded-none border-b p-0">
        <TabsTrigger value="npm">npm</TabsTrigger>
        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
        <TabsTrigger value="yarn">yarn</TabsTrigger>
        <TabsTrigger value="bun">bun</TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
}
