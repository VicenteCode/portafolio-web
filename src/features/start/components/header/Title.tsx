type TitleProps = {
  greeting: string;
  className?: string;
};

export function Title({ greeting, className = "" }: TitleProps) {
  return (
    <h1
      className={[
        "font-comic text-5xl md:text-7xl leading-tight tracking-wide text-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {greeting}
    </h1>
  );
}
