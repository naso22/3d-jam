import Link from 'next/link';
import { ReactNode } from 'react';
import styles from '../ServiceSection.module.scss';

interface ServiceCardProps {
	href: string;
	icon: ReactNode;
	title: string;
	description: string;
}

export default function ServiceCard({ 
	href, 
	icon, 
	title, 
	description, 
}: ServiceCardProps) {
	return (
		<div className={`${styles.box}`}>
			<Link href={href}>
				<div className={styles.service_title}>
					<span className={styles.icon}>
						{icon}
					</span>
					{title}
				</div>
				<p className={styles.discription}>
					{description}
				</p>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="#818181"
						className={styles.more_icon}
					>
						<path d="m547.69-267.69-28.31-28.77L682.92-460H200v-40h482.92L519.38-663.54l28.31-28.77L760-480 547.69-267.69Z" />
					</svg>
				</div>
			</Link>
		</div>
	);
}
