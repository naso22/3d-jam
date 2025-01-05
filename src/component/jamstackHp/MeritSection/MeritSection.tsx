import ConstIcon from "@/component/svgComponet/jamstackHP/merit/CostIcon";
import DownIcon from "@/component/svgComponet/jamstackHP/merit/DownIcon";
import SecurityIcon from "@/component/svgComponet/jamstackHP/merit/SecurityIcon";
import SeoIcon from "@/component/svgComponet/jamstackHP/merit/SeoIcon";
import SpeedIcon from "@/component/svgComponet/jamstackHP/merit/SpeedIcon";
import UxIcon from "@/component/svgComponet/jamstackHP/merit/UxIcon";
import styles from "./MeritSection.module.scss";
export default function MeritSection() {
  const meritList = [
    {
      Icon: <SpeedIcon />,
      title: "表示速度の向上",
      discription:
        "ページを事前生成しCDN配信することで高速なページ速度を提供します",
    },
    {
      Icon: <SecurityIcon />,
      title: "セキュリティーの向上",
      discription:
        "フロントエンドとバックエンドを切り離すことで、攻撃されにくいサイトを提供します",
    },
    {
      Icon: <ConstIcon />,
      title: "ランニングコスト削減",
      discription:
        "サーバー側の処理が少なくなることでWEBサイトの運用にかかる費用を抑えることができます",
    },
    {
      Icon: <SeoIcon />,
      title: "SEOスコアの向上",
      discription:
        "ページを高速配信することで、googleからの評価を向上させることができます",
    },
    {
      Icon: <DownIcon />,
      title: "直帰率の低下",
      discription:
        "操作性、ページ速度が改善されることでページからの離脱率をさげることができます",
    },
    {
      Icon: <UxIcon />,
      title: "UXの向上",
      discription:
        "パフォーマンスが最適化されることで訪れた人にストレスの無い、高いユーザビリティを提供できます",
    },
  ];
  return (
    <>
      <section className={styles.merit}>
        <div>
          <h2>Jamstack技術でお任せください</h2>
          <p>Jamstack技術を駆使することで6つのメリットが生まれます</p>
          <div className={styles.merit_inner}>
            {meritList.map((item, index) => {
              return (
                <>
                  <div className={styles.meritItem}>
                    <div className={styles.meritNumber}>
                      {"0" + (index + 1)}
                    </div>
                    <div className={styles.meritIcon}>{item.Icon}</div>
                    <div className={styles.meritTitle}>{item.title}</div>
                    <p className={styles.worriesDescription}>
                      {item.discription}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
