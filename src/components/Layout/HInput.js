import style from './HInput.less';

export default function (props) {
	return (
		<label className={style.label}>
			<div className={style.text}>{props.label}</div>
			<input className={style.input} type={props.type} value={props.value}
				   onChange={props.onChange} disabled={props.disabled} name={props.name}/>
		</label>
	);
}
