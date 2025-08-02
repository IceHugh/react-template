// src/components/recent-update-item.tsx
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Update = {
  id: number;
  title: string;
  details: string;
} & ({ type: 'project' } | { type: 'developer'; avatarUrl: string });

interface RecentUpdateItemProps {
  update: Update;
}

const UpdateIcon = ({ update }: { update: Update }) => {
  if (update.type === 'developer') {
    return (
      <Avatar className="h-10 w-10">
        <AvatarImage src={update.avatarUrl} alt={update.title} />
        <AvatarFallback>{update.title.charAt(0)}</AvatarFallback>
      </Avatar>
    );
  }

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800">
      <span className="text-xl font-bold text-gray-400">#</span>
    </div>
  );
};

export function RecentUpdateItem({ update }: RecentUpdateItemProps) {
  return (
    <div className="flex items-center space-x-4">
      <UpdateIcon update={update} />
      <div>
        <p className="font-semibold text-white">{update.title}</p>
        <p className="text-sm text-gray-400">{update.details}</p>
      </div>
    </div>
  );
}