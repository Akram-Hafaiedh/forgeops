"use client";

import { FileSpreadsheet, FileText, Folder, Image as ImageIcon } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { employeeById, files } from "@/lib/data/demo";

const icons = {
  folder: Folder,
  pdf: FileText,
  sheet: FileSpreadsheet,
  image: ImageIcon,
  doc: FileText,
};

export default function FilesPage() {
  return (
    <div>
      <PageHeader title="Files" description="Shared documents for the workspace." />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {files.map((file) => {
          const Icon = icons[file.kind];
          return (
            <div
              key={file.id}
              className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-(--shadow-border)"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                <Icon className="size-4 text-muted-foreground" />
              </div>
              <div className="min-w-0">
                <p className="truncate font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {employeeById(file.ownerId)?.name} · {file.size}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
