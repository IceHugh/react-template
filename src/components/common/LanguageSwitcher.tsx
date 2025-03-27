'use client';

import { IconButton } from '@/components/common/button/IconButton';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CheckIcon, LanguagesIcon } from 'lucide-react';
import { useState } from 'react';

interface Locale {
  code: string;
  name: string;
}

const locales: Locale[] = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
];

export const LanguageSwitcher = () => {
  const [locale, setLocale] = useState<'en' | 'zh'>('en');

  const toggleLocale = (value: 'en' | 'zh') => {
    setLocale(value);
    document.body.classList.toggle('locale-en', value === 'en');
    document.body.classList.toggle('locale-zh', value === 'zh');
  };

  const handleChange = (value: 'en' | 'zh') => {
    toggleLocale(value);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton icon="prime:language" />
      </PopoverTrigger>
      <PopoverContent className="w-28 p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {locales.map((lang) => (
                <CommandItem
                  key={lang.code}
                  value={lang.code}
                  onSelect={() => handleChange(lang.code as 'en' | 'zh')}
                >
                  {locale === lang.code && (
                    <CheckIcon className="mr-2 h-4 w-4" />
                  )}
                  <span>{lang.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
