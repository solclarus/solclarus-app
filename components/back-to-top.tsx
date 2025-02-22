"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowBigUpDash } from "lucide-react";

export function BackToTop() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Button
      className="rounded-full"
      onClick={scrollToTop}
      variant="outline"
      size="icon"
    >
      <ArrowBigUpDash className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
