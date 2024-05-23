import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "bg-primary font-medium px-10 py-3 rounded-3xl mt-[2rem]",
        className
      )}
    >
      {children}
    </button>
  );
}
