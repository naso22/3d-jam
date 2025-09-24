interface ErrorStateProps {
	message: string;
	className?: string;
}

export default function ErrorState({ message, className }: ErrorStateProps) {
	return (
		<div className="content__wrapper">
			<div className="content">
				<div className="content__inner">
					<div 
						className={className}
						style={{ marginTop: "100px", height: "50vh" }}
					>
						{message}
					</div>
				</div>
			</div>
		</div>
	);
}
