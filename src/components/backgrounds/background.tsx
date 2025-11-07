// Background.tsx
import * as React from "react";

// tiny helper; or use your own `cn()` util
function cx(...a: (string | undefined | false)[]) {
  return a.filter(Boolean).join(" ");
}

type Props = {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;   // "div" | "section" | ...
  className?: string;                 // let parent set spacing/sizing
  grid?: boolean;                     // toggle the faint grid
  imageUrl?: string;                  // optional extra bg image
};

export default function Background({
  children,
  as = "div",
  className,
  grid = true,
  imageUrl = "/Vector.png",
}: Props) {
  const Tag = as as any;
  return (
    <Tag className={cx("relative isolate overflow-hidden", className)}>
      {/* optional image layer */}
      {imageUrl && (
        <div className="absolute inset-0 -z-10 bg-[url('/Vector.png')] bg-center bg-no-repeat bg-cover opacity-30" />
      )}

      {/* base purple gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(120,119,198,.25),transparent_40%),radial-gradient(1000px_500px_at_90%_20%,rgba(168,85,247,.25),transparent_40%),linear-gradient(180deg,#0b0713,#0b0713_20%,#150b1f_60%,#0b0713_100%)]" />

      {/* faint grid */}
      {grid && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[.14]
          [background-image:linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)]
          [background-size:40px_40px]
          [mask-image:radial-gradient(90%_60%_at_50%_0%,black,transparent)]"
        />
      )}

      {/* corner glows */}
      <div className="pointer-events-none absolute -left-40 -top-24 h-80 w-80 -z-10 rounded-full bg-fuchsia-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-16 h-72 w-72 -z-10 rounded-full bg-violet-500/25 blur-3xl" />

      {/* bottom vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-black/40 to-transparent" />

      {/* optional top hairline */}
      <div className="absolute inset-x-0 top-0 h-[2px] " />

      {children}
    </Tag>
  );
}
