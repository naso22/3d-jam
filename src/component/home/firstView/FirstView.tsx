import styles from "./FirstView.module.scss"
import ParticleCube from "@/component/particleCube/ParticleCube";
export default function FirstView() {
  return (
    <>
      <div className="fv">
        <div className={styles.fv_inner}>
          <ParticleCube />
          <div className={styles.main}>
            <div className={styles.main_inner}>
              <h1 className={styles.main_title}>
                Create
                <br />
                Jamstack
              </h1>
              <p className={styles.sub_title}>
              高速でハイセキュリティ <br />
              安心して長く使えるWebサイト構築します
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
