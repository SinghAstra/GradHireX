"use client";
import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <div className="flex flex-col-reverse w-full">
        <input
          type={type}
          className={cn(
            `flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-blue-500
           disabled:cursor-not-allowed disabled:opacity-50
           shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400 border peer
           `,
            className
          )}
          ref={ref}
          {...props}
        />
        <p className="text-sm font-medium text-white transition-colors duration-200 leading-none peer-focus-visible:text-blue-500 my-2">
          {label}
        </p>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
