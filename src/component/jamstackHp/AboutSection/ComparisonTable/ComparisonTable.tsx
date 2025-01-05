import BadIcon from "@/component/svgComponet/jamstackHP/about/BadIcon";
import CircleIcon from "@/component/svgComponet/jamstackHP/about/CircleIcon";
import styles from "./ComparisonTable.module.scss";

// ContentBlockPropsの型定義
type ContentBlockProps = {
  icon: JSX.Element; // iconはJSX.Element型に変更
  text: string;
};

// ComparisonRowコンポーネントのprops型定義
type ComparisonRowProps = {
  label: string;
  jamstackContent: string;
  traditionalContent: string;
};

// 再利用可能なコンポーネント
const ComparisonRow = ({ label, jamstackContent, traditionalContent }: ComparisonRowProps) => {
  return (
    <tr>
      <td className={styles.labelCell}>{label}</td>
      <td className={styles.jamstackCell}>
        <ContentBlock icon={<CircleIcon />} text={jamstackContent} />
      </td>
      <td className={styles.traditionalCell}>
        <ContentBlock icon={<BadIcon />} text={traditionalContent} />
      </td>
    </tr>
  );
};

const ContentBlock = ({ icon, text }: ContentBlockProps) => {
  return (
    <div className={styles.contentBlock}>
      <figure className={styles.iconWrapper}>{icon}</figure>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

// ComparisonTableコンポーネントの型定義
type TableData = {
  label: string;
  jamstackContent: string;
  traditionalContent: string;
};

export default function ComparisonTable() {
  // テーブルデータの型を指定
  const tableData: TableData[] = [
    {
      label: "表示速度",
      jamstackContent:
        "ページを事前生成し、CDNで配信することで高速なページ表示を達成します",
      traditionalContent:
        "リクエストごとにサーバーでレンダリングされるため、遅延が発生する可能性があります",
    },
    {
      label: "セキュリティー",
      jamstackContent: "静的ファイルのみを配信し、攻撃のリスクを最小化します",
      traditionalContent:
        "サーバー上で動的処理が行われるため、攻撃対象が増加します",
    },
    {
      label: "運用コスト",
      jamstackContent: "サーバーレスでコストを削減できます",
      traditionalContent: "常時稼働するサーバーが必要で、コストが高くなります",
    },
  ];

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerCell}></th>
            <th className={styles.jamstackHeader}>Jamstack</th>
            <th className={styles.traditionalHeader}>従来のサイト</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <ComparisonRow
              key={index}
              label={row.label}
              jamstackContent={row.jamstackContent}
              traditionalContent={row.traditionalContent}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
