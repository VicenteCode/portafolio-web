import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";
import type { ComponentType } from "react";

type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vicente-bravo-383920394/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/VicenteCode",
    icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:vicenbravo.777@gmail.com",
    icon: Mail,
  },
];
