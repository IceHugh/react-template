import LayoutPage from '@/layouts/LayoutPage';
export default function ExploreLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <LayoutPage header={<div>Explore</div>}>{children}</LayoutPage>;
}
