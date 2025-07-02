'use client';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';
import { TrpcProvider } from './TrpcProvider';
import { type Locale } from 'next-intl';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TrpcProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster position="top-center" />
        {children}
      </ThemeProvider>
    </TrpcProvider>
  );
}
