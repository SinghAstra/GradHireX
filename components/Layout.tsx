import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                Campus Placement Platform
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/auth/signin">
                <Button variant="outline" className="mr-2">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;
