"use client";
import { cn } from "@/lib/utils";
import * as React from "react";
import { HorizontalAnimationContainer } from "../global/animation-container";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, errorMessage, ...props }, ref) => {
    return (
      <HorizontalAnimationContainer className="flex flex-col-reverse w-full">
        {errorMessage && (
          <HorizontalAnimationContainer
            reverse={true}
            className="flex justify-end mt-1"
          >
            <p className="text-xs text-red-500">{errorMessage}</p>
          </HorizontalAnimationContainer>
        )}
        <input
          type={type}
          className={cn(
            `flex h-10 w-full bg-zinc-800 shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent 
            file:text-sm file:font-medium 
            focus-visible:outline-none focus-visible:ring-[2px] 
           disabled:cursor-not-allowed disabled:opacity-50
           shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400 border peer
           `,
            errorMessage
              ? "border-red-500 focus:ring-red-500 text-red-500 placeholder-red-400 "
              : "border-none text-white focus-visible:ring-blue-500 placeholder-neutral-600 ",
            className
          )}
          ref={ref}
          {...props}
        />
        <p
          className={`text-sm font-medium transition-colors duration-200 leading-none my-2 ${
            errorMessage
              ? "text-red-500"
              : " text-white peer-focus-visible:text-blue-500"
          }`}
        >
          {label}
        </p>
      </HorizontalAnimationContainer>
    );
  }
);
Input.displayName = "Input";

export { Input };
