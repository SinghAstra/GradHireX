"use client";
import { HorizontalAnimationContainer } from "@/components/global/animation-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, ChevronRight, FileText, User } from "lucide-react";
import { useState } from "react";
import ApplicationsTab from "./ApplicationsTab";
import JobTab from "./JobTab";
import ProfileTab from "./ProfileTab";

export default function StudentDashboard() {
  const [activeSection, setActiveSection] = useState("profile");
  const sidebarItems = [
    { id: "jobListing", icon: Briefcase, label: "Job Listing" },
    { id: "application", icon: FileText, label: "Application" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileTab />;
      case "jobListing":
        return <JobTab />;
      case "application":
        return <ApplicationsTab />;
      default:
        return null;
    }
  };

  const handleSave = () => {
    // Save user data to API
    console.log("Saving user data.");
  };

  return (
    <div className="flex h-screen bg-background">
      <HorizontalAnimationContainer
        reverse
        className="w-64 bg-card text-card-foreground p-4 shadow-lg"
      >
        {sidebarItems.map((item) => (
          <motion.button
            key={item.id}
            className={`flex items-center w-full p-2 mt-2 rounded-lg ${
              activeSection === item.id
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            }`}
            onClick={() => setActiveSection(item.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon className="w-5 h-5 mr-2" />
            {item.label}
            <ChevronRight className="w-4 h-4 ml-auto" />
          </motion.button>
        ))}
      </HorizontalAnimationContainer>

      <div className="flex-1 p-8">
        <HorizontalAnimationContainer className="w-full max-w-4xl mx-auto">
          {renderContent()}
        </HorizontalAnimationContainer>
      </div>
    </div>
  );
}
