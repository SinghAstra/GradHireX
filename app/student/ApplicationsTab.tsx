import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText } from "lucide-react";
import React from "react";

const ApplicationsTab = () => {
  return (
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
  );
};

export default ApplicationsTab;
