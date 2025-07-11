import type { InputHTMLAttributes } from "react";
import { clsx } from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  variant?: "default" | "minimal";
};

export const Input = ({ variant = "default", className, ...props }: Props) => {
  const base =
    "w-full transition-all duration-200 ease-in-out focus:outline-none placeholder:text-gray-400";

  const variants = {
    default:
      "px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 hover:border-gray-300",
    minimal:
      "px-4 py-3 bg-gray-50 border-0 rounded-xl focus:bg-white focus:ring-4 focus:ring-indigo-100 hover:bg-gray-100",
  };

  return (
    <input {...props} className={clsx(base, variants[variant], className)} />
  );
};
