import * as React from "react";

function cx(...a: (string | undefined | false)[]) {
  return a.filter(Boolean).join(" ");
}

type Props = {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;   
  className?: string;                 
  grid?: boolean;                    
  imageUrl?: string;                  
};

export default function Background({
  children,
  as = "div",
  className,
  imageUrl = "/Vector.png",
}: Props) {
  const Tag = as as any;
  return (
    <Tag className={cx("relative isolate overflow-hidden", className)}>
      {imageUrl && (
        <div className="absolute inset-0 -z-10
          [background-image:url('/Vector.png'),url('/ellipsehero.png')]
          [background-repeat:no-repeat,no-repeat]
          [background-position:top,top]
          [background-size:100%_auto,100%_auto]" />
      )}

      
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-black/40 to-transparent" />

     

      {children}
    </Tag>
  );
}
