import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function ProjectCard({ category, title, description, icon }: any) {
  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardContent className="flex items-center justify-between p-0">
        <div className="max-w-xs pr-4">
          <p className="text-sm">{category}</p>
          <h3 className="mt-1 text-xl font-bold">{title}</h3>
          <p className="mt-2 text-sm">{description}</p>
        </div>
        <div>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}
