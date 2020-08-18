import theme from './Bluelib.less';

export default function(props) {
    return (
        <div class={theme.bluelib}>{props.children}</div>
    )
}