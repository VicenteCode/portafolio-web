import { Card } from "@/components/ui/card";
import { ABOUT_DESCRIPTION } from "@/features/about-me/constants/about";

export function AboutCard() {
  return (
    <Card variant="glass" padding="lg" radius="lg" className="max-w-2xl transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
      <p className="text-zinc-300 text-lg leading-9 text-pretty">
        {ABOUT_DESCRIPTION.map((segment, i) =>
          segment.highlight ? (
            <span key={i} className="text-white font-semibold">
              {segment.text}
            </span>
          ) : (
            segment.text
          )
        )}
      </p>
    </Card>
  );
}
