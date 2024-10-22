import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserRole } from "@prisma/client";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import { useEffect, useState } from "react";

interface StudentInfo {
  course: string;
  graduationYear: number;
  skills: string[];
}

const ProfileTab = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    role: UserRole.STUDENT,
    image: "",
  });

  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    course: "",
    graduationYear: 0,
    skills: [],
  });

  const [universityInfo, setUniversityInfo] = useState({
    name: "",
    location: "",
  });

  const [companyInfo, setCompanyInfo] = useState({
    name: "",
    industry: "",
  });

  useEffect(() => {
    // Fetch user data from API
    // For now, we'll use mock data
    setUser({
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: UserRole.STUDENT,
      image: "https://avatars.githubusercontent.com/u/1234567",
    });

    setStudentInfo({
      course: "Computer Science",
      graduationYear: 2024,
      skills: ["JavaScript", "React", "Node.js"],
    });
  }, []);

  const handleSave = () => {
    // Save user data to API
    console.log("Saving user data:", {
      user,
      studentInfo,
      universityInfo,
      companyInfo,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto border border-1 rounded-md p-4">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="role-specific">Role Specific</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src={user.image || "https://via.placeholder.com/100"}
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <Button>Change Avatar</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="course">Course</Label>
                <Input
                  id="course"
                  value={studentInfo.course}
                  onChange={(e) =>
                    setStudentInfo({
                      ...studentInfo,
                      course: e.target.value,
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graduationYear">Graduation Year</Label>
                <Input
                  id="graduationYear"
                  type="number"
                  value={studentInfo.graduationYear}
                  onChange={(e) =>
                    setStudentInfo({
                      ...studentInfo,
                      graduationYear: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills">Skills (comma-separated)</Label>
              <Input
                id="skills"
                value={studentInfo.skills.join(", ")}
                onChange={(e) =>
                  setStudentInfo({
                    ...studentInfo,
                    skills: e.target.value.split(",").map((s) => s.trim()),
                  })
                }
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <div className="mt-6">
        <Button onClick={handleSave} className="w-full">
          Save Changes <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProfileTab;
