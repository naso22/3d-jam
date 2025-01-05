import styles from "./ServiceSection.module.scss";

const ServicesSection = () => {
  return (
    <section className={styles.service}>
      <div className={styles.serviceInner}>
        <h2 className="text-3xl font-bold mb-8 text-center">サービス内容</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className={styles.serviceCard}>
            <img
              src="/service01.png"
              alt="提案"
              className="mb-4 w-full h-32 object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">要望にあったご提案</h3>
              <p className="text-sm leading-relaxed">
                お客様の理想を形にするために、丁寧なヒアリングからスタートします」 目標や課題をしっかりと理解することを最優先としています。どのような機能やデザインが必要なのか、またターゲットユーザーにどのような価値を提供したいのかを深掘りし、その情報をもとに最適な技術やデザインをご提案します。
                初回ミーティングでの徹底的なヒアリング
                目標達成に最適化された技術スタック（例: Next.js,
                JAMstack）とデザインの選定
                テンプレートではなく、完全カスタマイズの実現
              </p>
              <ul className="list-disc list-inside mt-4 text-sm">
                <li>相談に基づいた効率的な設計プラン</li>
                <li>
                  最新の技術スタックを用いた開発（例: Next.js, TailwindCSS）
                </li>
                <li>テンプレートを活用し、迅速なデザインの提案</li>
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
                  「サイト運用後も、データをもとにした改善提案で成果を伸ばします」 WEBサイトの運用において最も重要なのは、現状のデータを分析し、成果を上げるための次の一手を考えることです。アクセス解析やユーザー行動データを基にした改善提案を継続的に行い、サイトのパフォーマンスを向上させます。
                </p>
                <ul className="list-disc list-inside mt-4 text-sm">
                  <li>アクセス解析を活用した定期的なレポート作成</li>
                  <li>ユーザー行動データを基にしたUX/UIの最適化</li>
                  <li>目標達成率を高めるコンテンツや機能の追加提案</li>
                </ul>
              </div>
            </div>
            <div className={styles.imgContent}>
              <img
                src="/Data.png"
                alt="提案"
                className="mb-4 w-full h-32 object-contain"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.serviceCard}>
            <img
              src="/hoshu.png"
              alt="提案"
              className="mb-4 w-full h-32 object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                制作後の運用をサポート
              </h3>
              <p className="text-sm leading-relaxed">
                「安心して運用いただけるよう、運用支援からマーケティングまでトータルでサポートします」
                Webサイトは作って終わりではありません。私たちは、日々の更新サポートに加えて、マーケティング戦略やパフォーマンス向上のための具体的な提案を行います。成果を最大化するため、継続的な改善と成長をお手伝いします。
              </p>
              <ul className="list-disc list-inside mt-4 text-sm">
                <li>・パフォーマンスチェックと定期メンテナンス</li>
                <li>・迅速なトラブル対応</li>
                <li>・効果的なマーケティングサポート</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
