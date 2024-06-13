import clsx from "clsx";

export default function IconCard({
  children,
  className,
  ...rest
}: {
  children: any;
  className: string;
}) {
  return (
    <div
      {...rest}
      className={clsx("bg-secondary rounded-3xl border-primary", className)}
    >
      {children}
    </div>
  );
}
