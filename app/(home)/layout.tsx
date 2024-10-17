import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import React from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
