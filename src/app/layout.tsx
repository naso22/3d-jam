import './globals.scss';
import { site } from '@/models/site';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import Header from '@/component/layouts/Header';

const notoSansJP = Noto_Sans_JP({
	subsets: ['latin'],
	weight: ['400', '300', '500', '600', '700'],
});

export const metadata: Metadata = {
	metadataBase: new URL(`https://${site.domain}/`),
	title: `${site.title} | ${site.subTitle}`,
	description: site.description,
	openGraph: {
		title: `${site.title} | ${site.subTitle}`,
		siteName: site.title,
		description: site.description,
		url: `https://${site.domain}/`,
		type: 'website',
		images: `https://${site.domain}/images/ogp.png`,
	},
};

async function getNavItems() {
	// SSGのためのデータ取得
	return [
		{ name: 'ホーム', href: '/' },
		{ name: 'サービス', href: '/#service' },
		{ name: 'ブログ', href: '/blog' },
		{ name: '私について', href: '/#about' },
		{ name: 'お問い合わせ', href: '/contact' },
	];
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const navItems = await getNavItems();
	return (
		<html lang="ja">
			<body className={notoSansJP.className}>
				<Header navItems={navItems} />
				{children}
			</body>
		</html>
	);
}
