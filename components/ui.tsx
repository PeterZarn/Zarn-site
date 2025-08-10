import React from "react";
import { cn } from "./util";

export function Button({ className, variant, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "outline" | "ghost" }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition";
  const variants = {
    solid: "bg-violet-500 text-neutral-950 hover:bg-violet-600",
    outline: "border border-white/15 text-white hover:bg-white/10",
    ghost: "text-neutral-300 hover:text-white"
  };
  return <button className={cn(base, variants[variant ?? "solid"], className)} {...props} />;
}

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-3xl border border-white/10 bg-neutral-900", className)} {...props} />;
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-white text-lg font-semibold", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0 text-sm text-neutral-300", className)} {...props} />;
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn("w-full rounded-2xl bg-neutral-950 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-violet-500/30", props.className)} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn("w-full rounded-2xl bg-neutral-950 border border-white/10 px-3 py-2 text-sm outline-none min-h-[120px] focus:ring-2 focus:ring-violet-500/30", props.className)} />;
}
