"use client";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  FileText,
  User,
} from "lucide-react";
import { useState } from "react";
import ApplicationsTab from "./ApplicationsTab";
import JobTab from "./JobTab";
import ProfileTab from "./ProfileTab";

export default function StudentDashboard() {
  const [activeSection, setActiveSection] = useState("profile");
  const sidebarItems = [
    { id: "profile", icon: User, label: "Profile" },
    { id: "jobListing", icon: Briefcase, label: "Job Listing" },
    { id: "application", icon: FileText, label: "Application" },
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
      <motion.div
        className="w-64 bg-card text-card-foreground p-4 shadow-lg"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
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
      </motion.div>
      <div className="flex-1 p-8">
        <Card className="w-full max-w-4xl mx-auto">
          <CardContent className="p-6">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                {sidebarItems.find((item) => item.id === activeSection)?.label}
              </h2>
              {renderContent()}
            </motion.div>
            <Separator className="my-6" />
            <Button onClick={handleSave} className="w-full">
              Save Changes <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
