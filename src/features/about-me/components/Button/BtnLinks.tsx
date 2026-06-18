import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/features/about-me/constants/social";

export function BtnLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="md" className="gap-2">
            <Icon className="w-4 h-4" />
            {label}
          </Button>
        </a>
      ))}
    </div>
  );
}
