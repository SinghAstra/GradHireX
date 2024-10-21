import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Briefcase } from "lucide-react";
import React from "react";

const JobTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Briefcase className="mr-2" />
          Available Job Listings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Browse through job opportunities that match your skills and interests.
        </p>
        <Button>
          View Jobs <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobTab;
