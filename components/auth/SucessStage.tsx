import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

export function SuccessStage() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center py-8 space-y-6">
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-4 left-1/4 animate-float">
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="absolute top-0 right-1/4 animate-float-delayed">
            <Sparkles className="w-4 h-4 text-blue-500" />
          </div>
          <div className="absolute top-8 left-1/3 animate-float">
            <Sparkles className="w-5 h-5 text-purple-500" />
          </div>
        </div>
      )}

      <div className="relative">
        <div className="absolute inset-0 animate-ping">
          <div className="w-16 h-16 rounded-full bg-green-500/20" />
        </div>
        <div className="relative animate-bounce-subtle">
          <CheckCircle2 className="w-16 h-16 text-green-500" />
        </div>
      </div>

      <div className="text-center space-y-3">
        <h3 className="text-2xl font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
          Welcome Aboard! 🎉
        </h3>
        <p className="text-neutral-400 max-w-sm">
          Your account has been successfully created. We're thrilled to have you
          join our community.
        </p>
      </div>

      <div className="grid gap-4 w-full max-w-sm">
        <Link href="/dashboard" className="group">
          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <Link href="/onboarding" className="w-full">
          <Button
            variant="outline"
            className="w-full border-neutral-700 hover:border-blue-500 transition-colors"
          >
            Complete Your Profile
          </Button>
        </Link>
      </div>

      <div className="pt-6 border-t border-neutral-800 w-full max-w-sm">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm text-neutral-400">
            Quick Links to Get You Started
          </p>
          <div className="grid grid-cols-3 gap-6 w-full">
            <Link
              href="/docs"
              className="flex flex-col items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors group"
            >
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-xs">Docs</span>
            </Link>
            <Link
              href="/tutorial"
              className="flex flex-col items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors group"
            >
              <HelpCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-xs">Tutorial</span>
            </Link>
            <Link
              href="/support"
              className="flex flex-col items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors group"
            >
              <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-xs">Support</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
