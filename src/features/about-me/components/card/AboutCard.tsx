import { Card } from "@/components/ui/card";
import { ABOUT_DESCRIPTION } from "@/features/about-me/constants/about";

export function AboutCard() {
  return (
    <Card variant="ghost" padding="none">
      <p className="text-zinc-100 text-base leading-7 text-justify text-pretty">{ABOUT_DESCRIPTION}</p>
    </Card>
  );
}
