import { EmploymentType, WorkMode } from "@prisma/client";
import { z } from "zod";

export const ExperienceSchema = z.object({
  companyName: z.string().min(1, { message: "Company Name is required" }),
  designation: z.string().min(1, { message: "Designation is required" }),
  EmploymentType: z.nativeEnum(EmploymentType, {
    message: "Employment type is required",
  }),
  address: z.string().min(1, { message: "Address is required" }),
  workMode: z.nativeEnum(WorkMode, {
    message: "Work mode is required",
  }),
  currentWorkStatus: z.boolean({
    required_error: "Current work status is required",
  }),
  startDate: z.date({
    required_error: "Start date is required",
    invalid_type_error: "Invalid date",
  }),
  endDate: z.date({ invalid_type_error: "Invalid date" }).optional(),
  description: z
    .string()
    .min(50, { message: "Description must be at least 50 characters" })
    .max(255, { message: "Description cannot exceed 255 characters" }),
});

export type ExperienceSchemaType = z.infer<typeof ExperienceSchema>;
