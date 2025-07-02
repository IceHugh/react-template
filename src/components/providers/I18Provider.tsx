import { NextIntlClientProvider } from 'next-intl';
import { type Locale } from 'next-intl';

export function I18Provider({ children, locale }: { children: React.ReactNode, locale: Locale }) {
  return (
    <NextIntlClientProvider locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
