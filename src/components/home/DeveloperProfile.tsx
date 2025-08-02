// src/components/developer-profile.tsx
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface DeveloperProfileProps {
  developer: {
    avatarUrl: string;
    name: string;
    role: string;
  };
}

export function DeveloperProfile({ developer }: DeveloperProfileProps) {
  return (
    <div className="flex flex-col items-center space-y-2 flex-shrink-0 w-28">
      {/*
        图片中的头像背景色是米色。
        在真实项目中，你可以让设计师提供带有背景色的图片。
        或者，用一个 div 包裹 Avatar 来设置背景色。
        这里我用 AvatarFallback 来模拟。
      */}
      <Avatar className="h-24 w-24 border-2 border-transparent bg-[#F3EADF]">
        <AvatarImage src={developer.avatarUrl} alt={developer.name} />
        <AvatarFallback>{developer.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <p className="font-semibold text-sm text-white">{developer.name}</p>
        <p className="text-xs text-gray-400">{developer.role}</p>
      </div>
    </div>
  );
}