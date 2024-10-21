"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Briefcase, FileText, User } from "lucide-react";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <MaxWidthWrapper className="mt-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="jobs">Job Listings</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2" />
                Your Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Manage and update your personal information, skills, and resume.
              </p>
              <Button>
                Edit Profile <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="jobs">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2" />
                Available Job Listings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Browse through job opportunities that match your skills and
                interests.
              </p>
              <Button>
                View Jobs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2" />
                Your Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Track the status of your job applications and interviews.
              </p>
              <Button>
                View Applications <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </MaxWidthWrapper>
  );
}
