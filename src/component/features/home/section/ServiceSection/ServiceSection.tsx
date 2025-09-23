import AnaliuticsIcon from '@/component/features/home/icon/Analiytics';
import Develop from '@/component/features/home/icon/Develop';
import DocumentIcon from '@/component/features/home/icon/Document';
import PcIcon from '@/component/features/home/icon/Pc';
import ServiceCard from './parts/ServiceCard';
import styles from './ServiceSection.module.scss';

export default function ServiceSection() {
	return (
		<>
		<div id="service" className={styles.section}>
			<div className={styles.service}>
				<div className="service_inner">
					<h2 className={styles.title_eng}>Service</h2>
					<p className={styles.title}>サービス内容</p>
					<div className={styles.service_content}>
						<ServiceCard
							href=""
							icon={<PcIcon />}
							title="jamstackサイト制作"
							description="Jamstack技術を駆使した高速で安全なWebサイトを構築いたします。"
						/>

						<ServiceCard
							href=""
							icon={<DocumentIcon />}
							title="ホームページ制作"
							description="ニーズや目的に沿ったホームページを構築いたします。"
						/>

						<ServiceCard
							href=""
							icon={<Develop />}
							title="システム開発"
							description="抱えている悩みを解決できるシステムを構築いたします"
						/>

						<ServiceCard
							href=""
							icon={<AnaliuticsIcon />}
							title="マーケティング支援"
							description="SNS運用やLINE構築などを駆使してWebマーケティングを支援いたします"
						/>
					</div>
					</div>
				</div>
			</div>
		</>
	);
}
