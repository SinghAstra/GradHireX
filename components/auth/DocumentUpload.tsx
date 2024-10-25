import { getRequiredDocuments } from "@/app/auth/sign-in/page";
import {
  COMPANY_POSITIONS,
  GOVERNMENT_POSITIONS,
  UNIVERSITY_POSITIONS,
} from "@/types/organization";
import { StageProps } from "@/types/registration";
import { AlertCircle, Upload } from "lucide-react";
import React, { useState } from "react";
import {
  HorizontalAnimationContainer,
  VerticalAnimationContainer,
} from "../global/animation-container";
import { Alert, AlertDescription } from "../ui/alert";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_FILE_EXTENSIONS = [".pdf", ".doc", ".docx"];

interface ValidationError {
  type: "size" | "format";
  message: string;
}

interface FileValidationState {
  [key: string]: ValidationError | null;
}

export function DocumentUpload({
  formData,
  errors,
  handleFileChange,
}: StageProps) {
  const documents = getRequiredDocuments(formData);
  const [validationErrors, setValidationErrors] = useState<FileValidationState>(
    {}
  );

  const validateFile = (file: File): ValidationError | null => {
    if (file.size > MAX_FILE_SIZE) {
      return {
        type: "size",
        message: `File size exceeds 10MB limit (${(
          file.size /
          1024 /
          1024
        ).toFixed(2)}MB)`,
      };
    }

    const fileExtension = `.${file.name.split(".").pop()?.toLowerCase()}`;
    if (!ALLOWED_FILE_EXTENSIONS.includes(fileExtension)) {
      return {
        type: "format",
        message:
          "Invalid file format. Please upload PDF, DOC, or DOCX files only",
      };
    }

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return {
        type: "format",
        message:
          "Invalid file type. Please upload PDF, DOC, or DOCX files only",
      };
    }

    return null;
  };

  const handleFileValidation = (
    e: React.ChangeEvent<HTMLInputElement>,
    docId: string
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validationError = validateFile(file);
    setValidationErrors((prev) => ({
      ...prev,
      [docId]: validationError,
    }));

    if (!validationError) {
      handleFileChange(e, docId);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="space-y-6">
      <HorizontalAnimationContainer
        reverse={true}
        className="text-center space-y-2"
      >
        <h3 className="text-lg font-medium text-gray-200">
          Required Documents
        </h3>
        <p className="text-sm text-gray-400">
          Please upload the following documents to verify your position
        </p>
      </HorizontalAnimationContainer>

      {documents.map((doc) => (
        <div key={doc.id} className="space-y-2">
          <div className="flex justify-between items-start">
            <HorizontalAnimationContainer reverse={true}>
              <h4
                className={`text-sm font-medium ${
                  errors.documents?.[doc.id] ? "text-red-400" : "text-gray-200"
                }`}
              >
                {doc.name}
              </h4>
              <p
                className={`text-xs ${
                  errors.documents?.[doc.id] ? "text-red-500" : "text-gray-400"
                }`}
              >
                {doc.description}
              </p>
            </HorizontalAnimationContainer>
            {errors.documents?.[doc.id] && (
              <span className="text-xs text-red-500">Required</span>
            )}
          </div>

          <HorizontalAnimationContainer
            className={`border-2 border-dashed rounded-lg p-4 ${
              errors.documents?.[doc.id]
                ? "border-red-700 text-red-500"
                : "border-neutral-700"
            }`}
          >
            <label
              htmlFor={`document-${doc.id}`}
              className="flex items-center cursor-pointer space-x-3"
            >
              <Upload className="h-5 w-5" />
              <span className="text-sm truncate ">
                {formData.documents?.[doc.id]?.name || "Click to upload"}
              </span>
              <input
                id={`document-${doc.id}`}
                name={`document-${doc.id}`}
                type="file"
                className="hidden"
                accept={ALLOWED_FILE_EXTENSIONS.join(",")}
                onChange={(e) => handleFileValidation(e, doc.id)}
              />
            </label>
          </HorizontalAnimationContainer>
          {validationErrors[doc.id] && (
            <Alert variant="destructive" className="mt-2">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {validationErrors[doc.id]?.message}
              </AlertDescription>
            </Alert>
          )}
          <div className="flex justify-end">
            {formData.documents?.[doc.id] && !validationErrors[doc.id] && (
              <p className="text-xs text-gray-400 mt-1">
                File size: {formatFileSize(formData.documents[doc.id].size)}
              </p>
            )}
          </div>
        </div>
      ))}

      <VerticalAnimationContainer>
        <div className="text-xs text-neutral-500 text-center">
          Accepted formats: PDF, DOC, DOCX (Max size: 10MB per file)
        </div>
      </VerticalAnimationContainer>
    </div>
  );
}
