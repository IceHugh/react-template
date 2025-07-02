import { type Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import LayoutPage from '@/layouts/LayoutPage';

type Props = {
	params: Promise<{ locale: Locale }>;
};

export default function IndexPage({ params }: Props) {
	const { locale } = use(params);
	console.log('IndexPage locale', locale);
	setRequestLocale(locale);
	const t = useTranslations('IndexPage');

	return (
		<LayoutPage>
			<p className='max-w-[590px]'>
				{t.rich('description', {
					code: (chunks) => (
						<code className='font-mono text-white'>{chunks}</code>
					),
				})}
			</p>
		</LayoutPage>
	);
}
