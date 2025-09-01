import styles from "./MainImage.module.scss";

function LpMainImage() {
	return (
		<div className={styles.mainimg}>
			<div>
				<div className="text">
					<p>
						見る人を惹きつける、
						<br />
						ワンランク上の
						<br />
						WEBサイトを制作
					</p>
				</div>
				<div className="btn">
					<p>
						<a href="contact.html">
							<i className="fa-regular fa-envelope"></i>お問い合わせ
						</a>
					</p>
					<p>
						<a href="#">
							<i className="fa-regular fa-file-lines"></i>資料請求
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

LpMainImage.displayName = 'LpMainImage';
export default LpMainImage;
