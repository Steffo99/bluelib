import theme from "../styles/theme.less";
import HInput from "../components/Layout/HInput";
import Box, {BoxColors} from "../components/Panels/Box";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Code, Panel, Split} from "../index";
import Section from "../components/Panels/Section";
import Image from "../components/Elements/Image";
import HButton from "../components/Layout/HButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faCircle, faCross, faExclamationTriangle, faSpinner} from "@fortawesome/free-solid-svg-icons";
import ValidityStatus from "../components/Enums/ValidityStatus";


export default function (props) {
    return (
        <div class={theme.bluelib}>
            <h1>
                bluelib
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
                <Panel title={"HInputs"}>
                    <HInput type={"text"} label={"Username"}/>
                    <HInput type={"password"} label={"Password"}/>
                    <HInput type={"text"} label={"Caricamento"} icon={<FontAwesomeIcon icon={faSpinner} pulse={true}/>} validity={{
                        validity: ValidityStatus.DISABLED,
                        message: "Take your time..."
                    }}/>
                    <HInput type={"text"} label={"OK!"} icon={<FontAwesomeIcon icon={faCheck}/>} validity={{
                        validity: ValidityStatus.OK,
                        message: "",
                    }}/>
                    <HInput type={"text"} label={"È un angelo!"} icon={<FontAwesomeIcon icon={faExclamationTriangle}/>} validity={{
                        validity: ValidityStatus.WARNING,
                        message: "",
                    }}/>
                    <HInput type={"text"} label={"Spinning Jesus"} icon={<FontAwesomeIcon icon={faCross} spin={true}/>} validity={{
                        validity: ValidityStatus.ERROR,
                        message: "",
                    }}/>
                    <HInput type={"text"} label={"Ur mom"} icon={<FontAwesomeIcon icon={faCircle}/>} validity={{
                        validity: ValidityStatus.ERROR,
                        message: "ERROR: she is too fat for this input",
                    }}/>
                </Panel>
                <Panel title={"HButtons"}>
                    Ma quindi era tutto...
                    <HButton label={"...un bottone?"}>Lo è sempre stato.</HButton>
                    <HButton label={"...un Armageddon?"} validity={{
                        message: "ciaone"
                    }}>Lo è sempre stato.</HButton>
                </Panel>
            </Section>
        </div>
    );
}
