import { StageProps } from "@/types/registration";
import { Upload } from "lucide-react";
import React from "react";

export function DocumentUpload({
  formData,
  errors,
  handleFileChange,
}: StageProps) {
  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium text-gray-200">Document Upload</h3>
        <p className="text-sm text-gray-400">
          Please upload any relevant documentation to verify your organization
        </p>
      </div>

      <div className="border-2 border-dashed border-neutral-700 rounded-lg p-6 text-center">
        <label
          htmlFor="document-upload"
          className="flex flex-col items-center cursor-pointer space-y-2"
        >
          <Upload className="h-12 w-12 text-neutral-400" />
          <span className="text-sm text-neutral-400">
            {formData.document
              ? formData.document.name
              : "Click to upload or drag and drop"}
          </span>
          <span className="text-xs text-neutral-500">PDF, DOC up to 10MB</span>
          <input
            id="document-upload"
            name="document"
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
        </label>
      </div>
      {errors.document && (
        <p className="text-sm text-red-500 text-center">{errors.document}</p>
      )}
    </div>
  );
}
