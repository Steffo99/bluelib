import concatClass from '../../utils/concatClass';
import style from './BaseLink.less';
import { useContext } from 'preact/hooks';
import CurrentPage from '../../contexts/CurrentPage';

export default function (props) {
	const currentPage = useContext(CurrentPage);

	// Disabled
	if(props.disabled)
	{
		return (
			<span className={concatClass(style.link, style.disabled, props.class)}>{props.children}</span>
		);
	}

	// Current page
	if(props.href === currentPage) {
		return (
			<span className={concatClass(style.link, style.current, props.class)}>{props.children}</span>
		);
	}

	// Others
	return (
		<a className={concatClass(style.link, style.clickable, props.class)} href={props.href}>{props.children}</a>
	);
}
