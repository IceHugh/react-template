import { Search } from 'lucide-react';
import { ProjectCard } from '@/components/cards/ProjectCard'; // 确保路径正确
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { projectsData } from './data'; // 确保路径正确

export default function ExplorePage() {
	const filterTags = ['Trending', 'New', 'Popular', 'Recently Updated'];

	return (
		<div className='min-h-screen'>
			<div className='mx-auto px-4 py-8 sm:px-6 lg:px-8'>
				<main>
					{/* Search Bar */}
					<div className='relative'>
						<Search className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 ' />
						<Input
							type='search'
							placeholder='Search projects'
							className='w-full rounded-lg pl-10 text-white placeholder:text-gray-400'
						/>
					</div>

					{/* Filter Buttons */}
					<div className='mt-4 flex flex-wrap gap-3'>
						{filterTags.map((tag) => (
							<Button key={tag} variant='secondary' className='rounded-lg'>
								{tag}
							</Button>
						))}
					</div>

					{/* Top Projects Section */}
					<div className='mt-10'>
						<h1 className='text-3xl font-bold'>Top Projects</h1>

						<div className='mt-6 flex flex-col gap-8'>
							{projectsData.map((project) => (
								<ProjectCard key={project.title} {...project} />
							))}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
