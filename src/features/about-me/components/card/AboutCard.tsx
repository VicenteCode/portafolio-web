import { Card } from "@/components/ui/card";
import { ABOUT_DESCRIPTION } from "@/features/about-me/constants/about";

export function AboutCard() {
  return (
    <Card variant="ghost" padding="none">
      <p className="text-zinc-300 text-base leading-relaxed text-justify text-pretty">{ABOUT_DESCRIPTION}</p>
    </Card>
  );
}
