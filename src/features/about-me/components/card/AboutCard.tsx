import { Card } from "@/components/ui/card";
import { ABOUT_DESCRIPTION } from "@/features/about-me/constants/about";

export function AboutCard() {
  return (
    <Card variant="outlined" padding="lg" radius="lg" className="max-w-2xl">
      <p className="text-zinc-300 text-base leading-8 text-pretty">{ABOUT_DESCRIPTION}</p>
    </Card>
  );
}
