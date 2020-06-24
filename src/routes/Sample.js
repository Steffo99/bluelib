import theme from "../styles/theme.less";
import FormInput from "../components/Forms/FormInput";
import FormButton from "../components/Forms/FormButton";
import Box, {BoxColors} from "../components/Panels/Box";
import {faXbox} from "@fortawesome/free-brands-svg-icons";
import {Code, Panel} from "../index";
import Section from "../components/Panels/Section";
import Image from "../components/Elements/Image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAddressCard,
    faBug,
    faCheck,
    faCircle,
    faCross,
    faExclamationTriangle, faHouseUser,
    faRadiation,
    faSpinner
} from "@fortawesome/free-solid-svg-icons";
import ValidityStatus from "../components/Enums/ValidityStatus";
import style from "./Sample.less";


export default function (props) {
    return (
        <div class={theme.bluelib}>
            <h1>
                bluelib {process.env.RELEASE}
            </h1>
            <Section title={"Panels"}>
                <Panel title={"Default"}>
                    This is a default panel.
                </Panel>
                <Panel title={"Red"} color={BoxColors.RED}>
                    This is a red panel.
                </Panel>
                <Panel title={"Orange"} color={BoxColors.ORANGE}>
                    This is a orange panel.
                </Panel>
                <Panel title={"Yellow"} color={BoxColors.YELLOW}>
                    This is a yellow panel.
                </Panel>
                <Panel title={"Lime"} color={BoxColors.LIME}>
                    This is a lime panel.
                </Panel>
                <Panel title={"Cyan"} color={BoxColors.CYAN}>
                    This is a cyan panel.
                </Panel>
                <Panel title={"Blue"} color={BoxColors.BLUE}>
                    This is a blue panel.
                </Panel>
                <Panel title={"Magenta"} color={BoxColors.MAGENTA}>
                    This is a magenta panel.
                </Panel>
            </Section>
            <Section title={"Code"}>
                <Panel title={"Python"}>
                    <Code language={"python"}>{`
                        def echo(arg):
                            return arg
                        
                    `}</Code>
                </Panel>
                <Panel title={"Javascript"}>
                    <Code language={"js"}>{`
                        function echo(arg) {
                            return arg;
                        }
                    `}</Code>
                </Panel>
                <Panel title={"C#"}>
                    <Code language={"cs"}>{`
                        public string echo(string arg) {
                            return arg;
                        }
                    `}</Code>
                </Panel>
            </Section>
            <Section title={"Image"}>
                <Panel title={"Royal Games Logo"}>
                    <Image src={"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg"} alt={""}/>
                </Panel>
                <Panel title={"Generic User"}>
                    <Image src={"https://combo.steffo.eu/open/ryg/GenericUser.png"} alt={""}/>
                </Panel>
                <Panel title={"Markov Logo"}>
                    <Image src={"https://combo.steffo.eu/open/ryg/Markov.png"} alt={""}/>
                </Panel>
                <Panel title={"Royal Knights"}>
                    <Image src={"https://combo.steffo.eu/open/ryg/SpiralKnights.png"} alt={""}/>
                </Panel>
            </Section>
            <Section title={"Forms"}>
                <Panel title={"FormInputs"}>
                    <FormInput type={"text"} name={"username"} label={"Username"}/>
                    <FormInput type={"password"} label={"Password"}/>
                    <FormInput type={"text"} label={"Caricamento"} icon={<FontAwesomeIcon icon={faSpinner} pulse={true}/>} validity={{
                        validity: ValidityStatus.DISABLED,
                        message: [<FontAwesomeIcon icon={faAddressCard} className={style.flipping}/>, " Take your time..."]
                    }}/>
                    <FormInput type={"text"} label={"OK!"} icon={<FontAwesomeIcon icon={faCheck}/>} validity={{
                        validity: ValidityStatus.OK,
                        message: "",
                    }}/>
                    <FormInput type={"text"} label={"È un angelo!"} icon={<FontAwesomeIcon icon={faExclamationTriangle}/>} validity={{
                        validity: ValidityStatus.WARNING,
                        message: "",
                    }}/>
                    <FormInput type={"text"} label={"Spinning Jesus"} icon={<FontAwesomeIcon icon={faCross} spin={true}/>} validity={{
                        validity: ValidityStatus.ERROR,
                        message: "",
                    }}/>
                    <FormInput type={"text"} label={"Ur mom"} icon={<FontAwesomeIcon icon={faCircle}/>} validity={{
                        validity: ValidityStatus.ERROR,
                        message: "ERROR: she is too fat for this input",
                    }}/>
                </Panel>
                <Panel title={"FormButtons"}>
                    Ma quindi era tutto...
                    <FormButton label={"...un bottone?"}>Lo è sempre stato.</FormButton>
                    <FormButton label={"...disattivato?"} icon={<FontAwesomeIcon icon={faXbox}/>} validity={{
                        validity: ValidityStatus.DISABLED,
                        message: "pls w8 a sec"
                    }}>Sì.</FormButton>
                    <FormButton label={"...una città?"} icon={<FontAwesomeIcon icon={faHouseUser}/>} validity={{
                        validity: ValidityStatus.OK,
                    }}>Lucianina?</FormButton>
                    <FormButton label={"...miele?"} icon={<FontAwesomeIcon icon={faBug}/>} validity={{
                        validity: ValidityStatus.WARNING,
                    }}>Not the bees!</FormButton>
                    <FormButton label={"...un Helios?"} icon={<FontAwesomeIcon icon={faRadiation}/>} validity={{
                        validity: ValidityStatus.ERROR,
                        message: "ERROR: è finito il metallo",
                    }}>[AVVIA ANNICHILIMENTO]</FormButton>
                </Panel>
            </Section>
        </div>
    );
}
