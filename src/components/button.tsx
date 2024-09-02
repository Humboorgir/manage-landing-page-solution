import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "text-sm py-3 px-7 text-white rounded-full bg-primary",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
