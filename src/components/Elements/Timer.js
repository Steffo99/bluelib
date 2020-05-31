import {Component} from 'preact'
import style from "./Timer.less"


export default class Timer extends Component {
    constructor() {
        super();
        this.state = {
            "now": Date.now()
        };
        this.timer = null;
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({"now": Date.now()})
        }, 1000)
    }

    componentWillUnmount() {
        if(this.timer !== null) {
            clearInterval(this.timer)
        }
    }

    render() {
        let dateTo = "Unknown date";
        let className = style.timer;

        let parts = {
            milliseconds: "?",
            seconds: "?",
            minutes: "?",
            hours: "?",
            days: "?",
        };

        if(this.props.to) {
            dateTo = new Date(this.props.to);
            let timeLeft = dateTo - this.state.now;

            if(timeLeft > 0) {
                parts = {
                    milliseconds: timeLeft % 1000,
                    seconds: Math.floor(timeLeft / 1000) % 60,
                    minutes: Math.floor(timeLeft / 60000) % 60,
                    hours: Math.floor(timeLeft / 3600000) % 24,
                    days: Math.floor(timeLeft / 86400000),
                };
            }

            else {
                parts = {
                    milliseconds: 0,
                    seconds: 0,
                    minutes: 0,
                    hours: 0,
                    days: 0,
                };

                className += " " + style.expired;
            }
        }
        else {
            className += " " + style.unknown;
        }

        return (
            <div class={className} title={dateTo}>
                <div class={style.days + " " + style.count}>
                    {parts.days}
                </div>
                <div className={style.days + " " + style.text}>
                    giorni
                </div>
                <div class={style.hours + " " + style.count}>
                    {parts.hours}
                </div>
                <div className={style.hours + " " + style.text}>
                    ore
                </div>
                <div class={style.minutes + " " + style.count}>
                    {parts.minutes}
                </div>
                <div className={style.minutes + " " + style.text}>
                    minuti
                </div>
                <div class={style.seconds + " " + style.count}>
                    {parts.seconds}
                </div>
                <div class={style.seconds + " " + style.text}>
                    secondi
                </div>
            </div>
        )
    }
}
