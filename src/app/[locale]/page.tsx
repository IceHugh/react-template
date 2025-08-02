import { type Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import { DeveloperProfile } from '@/components/home/DeveloperProfile';
import { FeaturedProjectCard } from '@/components/home/FeaturedProjectCard';
import { RecentUpdateItem } from '@/components/home/RecentUpdateItem';
import { SectionHeader } from '@/components/home/SectionHeader';
import LayoutPage from '@/layouts/LayoutPage';
import { featuredProjects, recentUpdates, trendingDevelopers } from './data';

type Props = {
	params: Promise<{ locale: Locale }>;
};

export default function IndexPage({ params }: Props) {
	const { locale } = use(params);
	console.log('IndexPage locale', locale);
	setRequestLocale(locale);
	const _t = useTranslations('IndexPage');

	return (
		<LayoutPage>
			<div className='space-y-12 p-4 sm:p-6'>
				{/* Featured Projects Section */}
				<section>
					<SectionHeader>Featured Projects</SectionHeader>
					<div className='mt-4'>
						{/* Horizontal Scroll Container */}
						<div className='flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4'>
							{featuredProjects.map((project) => (
								<FeaturedProjectCard key={project.id} project={project} />
							))}
						</div>
					</div>
				</section>

				{/* Trending Developers Section */}
				<section>
					<SectionHeader>Trending Developers</SectionHeader>
					<div className='mt-4'>
						<div className='flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4'>
							{trendingDevelopers.map((dev) => (
								<DeveloperProfile key={dev.id} developer={dev} />
							))}
						</div>
					</div>
				</section>

				{/* Recent Updates Section */}
				<section>
					<SectionHeader>Recent Updates</SectionHeader>
					<div className='mt-4 space-y-6'>
						{recentUpdates.map((update) => (
							<RecentUpdateItem key={update.id} update={update as any} />
						))}
					</div>
				</section>
			</div>
		</LayoutPage>
	);
}
