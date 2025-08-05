"use client";

import { Drawer } from "vaul";
import { cn } from "./util";

export default function Footer({ className }: { className?: string }) {
  return (
    <Drawer.Root>
      <footer className={cn("text-brand", className)}>
        © 2025 Ibrahim Raimi. All rights reserved /{" "}
      </footer>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-10" />
        <Drawer.Content className="bg-neutral-950 p-8 pt-5 md:p-10 md:pt-10 fixed bottom-0 left-0 right-0 text-xs text-neutral-500 rounded-t-xl z-20">
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
