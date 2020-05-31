import style from './Footer.less';
import { Component } from 'preact';

export default function(props) {
	return (
		<div class={style.footer}>
			© {new Date().getFullYear()}
			&nbsp;-&nbsp;
			<a href={"https://steffo.eu/"}>Stefano Pigozzi</a>
			&nbsp;-&nbsp;
			<a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
			&nbsp;-&nbsp;
			<a href="https://github.com/Steffo99/appuntiweb">uni.steffo.eu {process.env.RELEASE}</a>
			&nbsp;-&nbsp;
			<a href={"https://ko-fi.com/steffo"}>Supportami</a>
		</div>
	);
}
