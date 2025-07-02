import { IconButton } from '@/components/common/button/IconButton';
import React from 'react';
import { useState } from 'react';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const icon =
    theme === 'light'
      ? 'solar:moon-stars-line-duotone'
      : 'solar:sun-2-line-duotone';

  return <IconButton variant="ghost" icon={icon} label="Toggle Theme" onClick={toggleTheme} />;
};
