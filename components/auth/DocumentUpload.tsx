import { getRequiredDocuments } from "@/app/auth/sign-in/page";
import {
  COMPANY_POSITIONS,
  GOVERNMENT_POSITIONS,
  UNIVERSITY_POSITIONS,
} from "@/types/organization";
import { StageProps } from "@/types/registration";
import { Upload } from "lucide-react";
import React from "react";
import {
  HorizontalAnimationContainer,
  VerticalAnimationContainer,
} from "../global/animation-container";

export function DocumentUpload({
  formData,
  errors,
  handleFileChange,
}: StageProps) {
  const documents = getRequiredDocuments(formData);

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
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileChange(e, doc.id)}
              />
            </label>
          </HorizontalAnimationContainer>
          <HorizontalAnimationContainer>
            <div className="flex justify-end"></div>
          </HorizontalAnimationContainer>
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
