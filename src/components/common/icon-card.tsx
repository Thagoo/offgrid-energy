import clsx from "clsx";

export default function IconCard({ children, className, ...rest }) {
  return (
    <div
      {...rest}
      className={clsx(
        "bg-secondary rounded-3xl border-[1px] border-primary",
        className
      )}
    >
      {children}
    </div>
  );
}
