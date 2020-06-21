import style from './HInput.less';

export default function (props) {
	return (
		<label className={style.label}>
			<div className={style.text}>{this.props.label}</div>
			<input className={style.input} type={this.props.type} value={this.props.value}
				   onChange={this.props.onChange} disabled={this.props.disabled} name={this.props.name}/>
		</label>
	);
}
