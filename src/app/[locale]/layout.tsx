import clsx from 'clsx';
import type { ReactNode } from 'react';
import '@/assets/styles/globals.css';
import { notFound } from 'next/navigation';
import { hasLocale, type Locale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Providers } from '@/components/providers/Providers';
import { routing } from '@/i18n/routing';
import LayoutDefault from '@/layouts/LayoutDefault';

type Props = {
	children: ReactNode;
	params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}
export async function generateMetadata(props: Omit<Props, 'children'>) {
	const { locale } = await props.params;

	const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

	return {
		title: t('title'),
	};
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	console.log('locale', locale);
	// Enable static rendering
	setRequestLocale(locale);
	return (
		<html lang={locale} suppressHydrationWarning>
			<head>
				<title>next-intl example</title>
			</head>
			<body className={clsx('flex min-h-[100vh] flex-col bg-slate-100')}>
				<NextIntlClientProvider>
					<Providers>
						<LayoutDefault>{children}</LayoutDefault>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
