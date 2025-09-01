import styles from "./ServiceSection.module.scss";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section className={styles.service}>
      <div className={styles.serviceInner}>
        <h2 className={styles.serviceTitle_eng}>Service</h2>
        <p className={styles.serviceTitle}>サービス内容</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className={styles.serviceCard}>
            <Image
              src="/service01.png"
              alt="提案"
              className="mb-4 w-full h-32 object-contain"
              width={512}
              height={256}
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">要望にあったご提案</h3>
              <p className="text-sm leading-relaxed">
                お客様の理想を形にするために、丁寧なヒアリングからスタートします」
                <br />
                目標や課題をと理解し、どのような機能やデザインが必要なのか、ターゲットユーザーにどのような価値を提供したいのかを深掘りし、
                最適な技術やデザインをご提案します。
              </p>
              <ul className="list-disc list-inside mt-4 text-sm">
                <li>・相談に基づいた効率的な設計プラン</li>
                <li>・最適な技術選定</li>
                <li>・要件に合わせたデザイン提案</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.serviceCard2}>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                データドリブンな改善提案
              </h3>
              <div className={styles.serviceDetails}>
                <p className="text-sm leading-relaxed">
                  「WEBサイトは作って終わりではありません。」
                  <br />
                  現状のデータを分析し、成果を上げるための一手を改考え続け成長させる必要があります。
                  <br />
                  アクセス解析やユーザー行動データを基にした改善を継続的に行い、サイトのパフォーマンスを向上させます。
                </p>
                <ul className="list-disc list-inside mt-4 text-sm">
                  <li>・アクセス解析を活用した定期的なレポート作成</li>
                  <li>・ユーザー行動データを基にしたUX/UIの最適化</li>
                  <li>・目標達成率を高めるコンテンツや機能の追加提案</li>
                </ul>
              </div>
            </div>
            <div className={styles.imgContent}>
              <Image
                src="/Data.png"
                alt="データ"
                className="mb-4 w-full h-32 object-contain"
                width={512}
                height={256}
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.serviceCard}>
            <Image
              src="/hoshu.png"
              alt="保守"
              className="mb-4 w-full h-32 object-contain"
              width={512}
              height={256}
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                制作後の運用をサポート
              </h3>
              <p className="text-sm leading-relaxed">
                「運用支援からマーケティングまでサポートします」<br />
                Webサイト制作後、安心して運用できるよう、定期的なセキュリティーチェック、WEBマーケティング支援をご提案いたします。
              </p>
              <ul className="list-disc list-inside mt-4 text-sm">
                <li>・パフォーマンスチェックと定期メンテナンス</li>
                <li>・迅速なトラブル対応</li>
                <li>・マーケティングサポート</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
