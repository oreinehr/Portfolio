'use client';

import { cn } from './lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
}

export function Button({ className, size = "md", variant = "solid", ...props }: ButtonProps) {
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    solid: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    ghost: "text-blue-500 hover:bg-blue-100",
  };

  return (
    <button
      className={cn(
        "rounded-lg transition-all",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
