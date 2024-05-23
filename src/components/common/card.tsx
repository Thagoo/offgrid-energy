import clsx from "clsx";



export default function Card({ children, className, ...rest }) {
  return (
    <div
      {...rest}
      className={clsx(
        "bg-gradient-to-b from-[#eaeae9] to-[#d6d6d7] rounded-3xl px-10 py-6 ",
        className
      )}
    >
      {children}
    </div>
  );
}
