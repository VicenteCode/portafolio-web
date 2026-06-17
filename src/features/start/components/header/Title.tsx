type TitleProps = {
  className?: string;
};

export function Title({ className = "" }: TitleProps) {
  return (
    <h1
      className={[
        "font-comic text-5xl md:text-7xl leading-tight tracking-wide",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      Hello, I&apos;m Vicente
    </h1>
  );
}
