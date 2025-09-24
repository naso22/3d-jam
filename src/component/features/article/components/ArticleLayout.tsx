import { ReactNode } from "react";

interface ArticleLayoutProps {
	children: ReactNode;
}

export default function ArticleLayout({ children }: ArticleLayoutProps) {
	return (
		<div className="content__wrapper">
			<div className="content">
				<div className="content__inner">
					{children}
				</div>
			</div>
		</div>
	);
}
