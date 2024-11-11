import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import {
  ExperienceFormSchema,
  ExperienceFormSchemaType,
} from "@/lib/validators/user.profile.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmploymentType, WorkMode } from "@prisma/client";
import _ from "lodash";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";

const AddExperienceForm = () => {
  const form = useForm<ExperienceFormSchemaType>({
    resolver: zodResolver(ExperienceFormSchema),
    defaultValues: {
      companyName: "",
      designation: "",
      EmploymentType: "Full_time",
      address: "",
      workMode: "office",
      currentWorkStatus: false,
      startDate: undefined,
      endDate: undefined,
      description: "",
    },
  });

  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: ExperienceFormSchemaType) => {
    console.log("data --experienceFormSchema is ", data);
  };

  const WatchCurrentWorkStatus = form.watch("currentWorkStatus");

  return (
    <div className="p-2 max-w-md ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="designation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Designation</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="EmploymentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employment Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(EmploymentType).map((type) => (
                      <SelectItem key={type} value={type}>
                        {_.startCase(type)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="workMode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Mode</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(WorkMode).map((mode) => (
                      <SelectItem key={mode} value={mode}>
                        {_.startCase(mode)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="currentWorkStatus"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-gray-300 data-[state=unchecked]:bg-gray-400"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Currently working here</FormLabel>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    value={
                      field.value ? field.value.toISOString().split("T")[0] : ""
                    }
                    onChange={(e) => field.onChange(new Date(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {!WatchCurrentWorkStatus && (
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      value={
                        field.value
                          ? field.value.toISOString().split("T")[0]
                          : ""
                      }
                      onChange={(e) =>
                        field.onChange(
                          e.target.value ? new Date(e.target.value) : undefined
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormDescription>
                  Describe your role and responsibilities (50-255 characters)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
            aria-label="submit"
          >
            {form.formState.isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-3"
                  viewBox="0 0 24 24"
                ></svg>
                <span className="ml-2">Please Wait</span>
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddExperienceForm;
