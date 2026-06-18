type SubTitleProps = {
  className?: string;
};

export function SubTitle({ className = "" }: SubTitleProps) {
  return (
    <h2
      className={[
        "font-comic text-xl md:text-2xl leading-tight tracking-wide text-red-500 font-semibold",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      Full Stack Developer
    </h2>
  );
}
