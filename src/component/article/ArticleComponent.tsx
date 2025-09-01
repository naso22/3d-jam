import BreadcrumbComponent from "@/component/breadcrumb/BreadcrumbComponent";
import Image from "next/image";
import Link from "next/link";
import styles from "./ArticleComponent.module.scss";

type ArticleComponentProps = {
  blogUrl: string;
  title: string;
  mainVisual: string;
  articleContent: string;
};

export default function ArticleComponent({
  blogUrl,
  title,
  mainVisual,
  articleContent,
}: ArticleComponentProps) {
  const breadcrumbData = [
    { name: "ホーム", href: "/blog" },
    { name: "ブログ", href: `/blog` },
    { name: title, href: `/blog/${blogUrl}` },
  ];

  // コードブロックにコピーボタンを追加する関数
  const processArticleContent = (content: string) => {
    // preタグ内のcodeタグを検索して、コピーボタンを追加
    return content.replace(
      /<pre[^>]*class="[^"]*language-([^"]*)"[^>]*>/g,
      (match, language) => {
        return `<pre class="language-${language}"><button class="copy-button" onclick="copyCode(this)" title="コードをコピー">📋</button></pre>`;
      }
    );
  };

  return (
    <>
      <main className={`${styles.postMain} main_content`}>
        <BreadcrumbComponent breadcrumbData={breadcrumbData} />
        <section>
          <article className={`${styles.articleWrapper} ${styles.article}`}>
            <div className={styles.articleHead}>
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
              <Image
                src={mainVisual}
                className={styles.aboutIcon}
                alt="aiconイメージ"
                layout="responsive"
                width={100}
                height={100}
              />
              <div
                className={styles.articleContent}
                dangerouslySetInnerHTML={{ __html: processArticleContent(articleContent) }}
              />
            </div>
          </article>
        </section>
      </main>
      
      {/* コピー機能のスクリプト */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function copyCode(button) {
              const preElement = button.parentElement;
              const codeElement = preElement.querySelector('code');
              
              if (codeElement) {
                const textToCopy = codeElement.textContent || '';
                
                // クリップボードにコピー
                if (navigator.clipboard && window.isSecureContext) {
                  navigator.clipboard.writeText(textToCopy).then(() => {
                    showCopySuccess(button);
                  }).catch(() => {
                    showCopyError(button);
                  });
                } else {
                  // フォールバック: 古いブラウザ対応
                  const textArea = document.createElement('textarea');
                  textArea.value = textToCopy;
                  document.body.appendChild(textArea);
                  textArea.select();
                  try {
                    document.execCommand('copy');
                    showCopySuccess(button);
                  } catch (err) {
                    showCopyError(button);
                  }
                  document.body.removeChild(textArea);
                }
              }
            }
            
            function showCopySuccess(button) {
              button.innerHTML = '✅';
              button.style.backgroundColor = '#10b981';
              button.style.color = 'white';
              
              setTimeout(() => {
                button.innerHTML = '📋';
                button.style.backgroundColor = '';
                button.style.color = '';
              }, 2000);
            }
            
            function showCopyError(button) {
              button.innerHTML = '❌';
              button.style.backgroundColor = '#ef4444';
              button.style.color = 'white';
              
              setTimeout(() => {
                button.innerHTML = '📋';
                button.style.backgroundColor = '';
                button.style.color = '';
              }, 2000);
            }
          `
        }}
      />
    </>
  );
}
