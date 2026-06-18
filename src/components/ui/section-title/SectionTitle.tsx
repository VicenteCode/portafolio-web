interface SectionTitleProps {
  text: string;
}

export function SectionTitle({ text }: SectionTitleProps) {
  return (
    <h2 className="font-comic text-4xl md:text-5xl tracking-wide text-center">
      {text}
    </h2>
  );
}
