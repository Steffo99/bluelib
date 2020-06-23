import style from './HButton.less';

export default function (props) {
	return (
		<label className={style.label}>
			<div className={style.text}>{props.label}</div>
			<button
				onClick={props.disabled ? null : props.onClick}
				className={style.button}
				disabled={props.disabled}
			>
				{props.children}
			</button>
		</label>
	);
}
