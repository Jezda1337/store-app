"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface props {
  href: string;
  children: string | React.ReactNode;
}

export default function NavLink({ href, children }: props) {
  const segment = useSelectedLayoutSegment();
  const active = href === `/${segment}`;
  return (
    <Link className={`${active ? "border-b" : ""} pb-1`} href={href}>
      {children}
    </Link>
  );
}
