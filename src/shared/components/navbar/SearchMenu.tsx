"use client";

import { useEffect, useState } from "react";
import { CornerDownLeft, Search } from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandInput,
  CommandEmpty,
  CommandList,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Menu } from "@/data/SearchMenu";

function SearchMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  };

  const openSocialLink = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden h-9 w-64 items-center justify-between rounded-lg border bg-background px-3 text-sm text-muted-foreground transition-colors hover:bg-muted lg:flex"
      >
        <div className="flex items-center gap-2">
          <Search className="size-4" />
          <span>Search...</span>
        </div>

        <kbd className="rounded border bg-muted px-1.5 py-0.5 text-[10px]">
          Ctrl K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search..." />

          <CommandList className="">
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Sections">
              {Menu.Sections.map((section) => {
                const Icon = section.icon;

                return (
                  <CommandItem
                    key={section.id}
                    value={section.name}
                    onSelect={() => scrollToSection(section.id)}
                    className="cursor-pointer"
                  >
                    <Icon className="size-4" />
                    <span>{section.name}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>

            <CommandGroup heading="Social Links">
              {Menu["Social Links"].map((social) => {
                const Icon = social.icon;

                return (
                  <CommandItem
                    key={social.name}
                    value={social.name}
                    onSelect={() => openSocialLink(social.link)}
                    className="cursor-pointer"
                  >
                    <div
                      className="p-1.5 rounded-lg text-white"
                      style={{
                        backgroundColor: social.bg,
                      }}
                    >
                      <Icon className="size-4" />
                    </div>
                    <span>{social.name}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>

          <div className="flex h-10 items-center justify-between border-t bg-muted/30 px-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Search className="size-3.5" />
              <span>Search</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span>Go to section</span>

                <kbd className="inline-flex size-5 items-center justify-center rounded border bg-background text-[11px] shadow-sm">
                  <CornerDownLeft className="size-3" />
                </kbd>
              </div>

              <div className="flex items-center gap-1.5">
                <span>Exit</span>

                <kbd className="rounded border bg-background px-1.5 py-0.5 text-[10px] shadow-sm">
                  ESC
                </kbd>
              </div>
            </div>
          </div>
        </Command>
      </CommandDialog>
    </>
  );
}

export default SearchMenu;
