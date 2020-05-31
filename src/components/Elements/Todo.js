import style from "./Todo.less";

export default function (props) {
	if(process.env.NODE_ENV === "development") {
		return <span class={style.todo}>{props.children}</span>;
	}
	else {
		return null;
	}
}
