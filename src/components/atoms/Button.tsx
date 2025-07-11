import type { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "danger" | "success" | "ghost" | "minimal";
  size?: "sm" | "md" | "lg";
};

export const Button = ({
  variant = "primary",
  size = "md",
  className,
  ...props
}: Props) => {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out rounded-xl focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl focus:outline-none",
    danger:
      "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 shadow-lg hover:shadow-xl focus:outline-none",
    success:
      "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-lg hover:shadow-xl focus:outline-none",
    ghost:
      "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none",
    minimal: "bg-gray-200 text-gray-700 hover:bg-gray-200 focus:outline-none",
  };

  return (
    <button
      className={clsx(base, sizes[size], variants[variant], className)}
      {...props}
    />
  );
};
