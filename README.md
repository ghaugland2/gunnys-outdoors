type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sky-500">{eyebrow}</div>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-stone-400">{description}</p> : null}
    </div>
  );
}
