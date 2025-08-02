// 你可以创建一个 data/projects.ts 文件，或者直接在页面组件中定义

export type Project = {
	category: string;
	title: string;
	description: string;
	icon?: React.ReactNode; // 使用 ReactNode 可以让我们传入自定义的图标组件
};

export const projectsData: Project[] = [
	{
		category: 'Web3',
		title: 'Decentralized Social Network',
		description:
			'A social media platform built on blockchain technology, ensuring user data privacy and content ownership.',
		// icon: <IconWeb3 />,
	},
	{
		category: 'DeFi',
		title: 'Automated Market Maker',
		description:
			'A decentralized exchange protocol that uses smart contracts to create liquidity pools and enable token swaps.',
		// icon: <IconDeFi />,
	},
	{
		category: 'NFT',
		title: 'NFT Marketplace',
		description:
			'A platform for creating, buying, and selling non-fungible tokens, representing unique digital assets.',
		// icon: <IconNFT />,
	},
];
