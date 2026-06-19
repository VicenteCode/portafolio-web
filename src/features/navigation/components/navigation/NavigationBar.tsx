"use client";

import { Navbar } from "@/components/layout/Navbar";
import { NavLinks } from "../../constants/NavLinks";

export function NavigationBar() {
  return <Navbar links={NavLinks} />;
}
