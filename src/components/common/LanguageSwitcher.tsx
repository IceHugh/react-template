import { type Locale, useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import { useParams, usePathname, useRouter } from 'next/navigation';
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

import { CheckIcon } from 'lucide-react';
import { useTransition } from 'react';


export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  const handleChange = (value: Locale) => {
    startTransition(() => {
      const segments = pathname.split('/');
      segments[1] = value; // 替换 locale 部分
      router.replace(segments.join('/'));
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton
          icon="prime:language"
          variant="ghost"
          label="Switch language"
        />
      </PopoverTrigger>
      <PopoverContent className="w-28 p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {routing.locales.map((lang) => (
                <CommandItem
                  key={lang}
                  value={lang}
                  onSelect={() => handleChange(lang)}
                  disabled={isPending}
                  className="cursor-pointer justify-between"
                >
                  <span>{t('locale', { locale: lang })}</span>
                  {locale === lang && (
                    <CheckIcon className="mr-2 h-4 w-4" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
