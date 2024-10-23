import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-none md:rounded-lg z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,hsl(217.2,91.2%,59.8%),transparent),radial-gradient(circle_farthest-side_at_100%_0,hsl(217.2,32.6%,17.5%),transparent),radial-gradient(circle_farthest-side_at_100%_100%,hsl(224.3,76.3%,48%),transparent),radial-gradient(circle_farthest-side_at_0_0,hsl(217.2,91.2%,59.8%),hsl(222.2,84%,4.9%))]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-none md:rounded-lg z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,hsl(217.2,91.2%,59.8%),transparent),radial-gradient(circle_farthest-side_at_100%_0,hsl(217.2,32.6%,17.5%),transparent),radial-gradient(circle_farthest-side_at_100%_100%,hsl(224.3,76.3%,48%),transparent),radial-gradient(circle_farthest-side_at_0_0,hsl(217.2,91.2%,59.8%),hsl(222.2,84%,4.9%))]"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
