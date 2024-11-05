import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import _ from "lodash";
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
import { Textarea } from "../ui/textarea";
// import { Switch } from '../ui/switch';
// import { LoadingSpinner } from '../loading-spinner';
import { useToast } from "@/hooks/use-toast";
import {
  ExperienceSchema,
  ExperienceSchemaType,
} from "@/lib/validators/user.profile.validator";
import { EmploymentType, WorkMode } from "@prisma/client";
import { useState } from "react";
import { Switch } from "../ui/switch";

const AddExperienceForm = () => {
  const form = useForm<ExperienceSchemaType>({
    resolver: zodResolver(ExperienceSchema),
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

  const onSubmit = async (data: ExperienceSchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast({
      title: "Experience Added Successfully",
    });
  };

  // const onSubmit = async (data: expFormSchemaType) => {
  //   try {
  //     setIsLoading(true);
  //     const response = await addUserExperience(data);
  //     if (!response.status) {
  //       return toast({
  //         title: response.message || 'Error',
  //         variant: 'destructive',
  //       });
  //     }
  //     toast({
  //       title: response.message,
  //       variant: 'success',
  //     });
  //     form.reset(form.formState.defaultValues);
  //   } catch (_error) {
  //     toast({
  //       title: 'Something went wrong while Adding Experience',
  //       description: 'Internal server error',
  //       variant: 'destructive',
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const WatchCurrentWorkStatus = form.watch("currentWorkStatus");

  return (
    <div className="p-2 w-full ">
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
            disabled={form.formState.isSubmitting}
            className="w-full"
            aria-label="submit"
          >
            {form.formState.isSubmitting ? "Submitting ..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddExperienceForm;
