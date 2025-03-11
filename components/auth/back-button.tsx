"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button size="sm" className="font-normal w-full" variant="link" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
