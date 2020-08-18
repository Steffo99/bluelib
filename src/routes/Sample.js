import FormInput from "../components/Forms/FormInput";
import FormButton from "../components/Forms/FormButton";
import {BoxColors} from "../components/Panels/Box";
import {faXbox} from "@fortawesome/free-brands-svg-icons";
import Code from "../components/Rendering/Code";
import Panel from "../components/Panels/Panel";
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
import Validity from "../enums/Validity";
import style from "./Sample.less";
import Bluelib from "../components/Bluelib";


export default function (props) {
    return (
        <Bluelib>
            <h1>
                bluelib {process.env.RELEASE}
            </h1>
            <Section title={"Panels"}>
                <Panel title={"Default"}>
                    <p>
                        This is a default panel.
                    </p>
                </Panel>
                <Panel title={"Red"} color={BoxColors.RED}>
                    <p>
                        This is a red panel.
                    </p>
                </Panel>
                <Panel title={"Orange"} color={BoxColors.ORANGE}>
                    <p>
                        This is a orange panel.
                    </p>
                </Panel>
                <Panel title={"Yellow"} color={BoxColors.YELLOW}>
                    <p>
                        This is a yellow panel.
                    </p>
                </Panel>
                <Panel title={"Lime"} color={BoxColors.LIME}>
                    <p>
                        This is a lime panel.
                    </p>
                </Panel>
                <Panel title={"Cyan"} color={BoxColors.CYAN}>
                    <p>
                        This is a cyan panel.
                    </p>
                </Panel>
                <Panel title={"Blue"} color={BoxColors.BLUE}>
                    <p>
                        This is a blue panel.
                    </p>
                </Panel>
                <Panel title={"Magenta"} color={BoxColors.MAGENTA}>
                    <p>
                        This is a magenta panel.
                    </p>
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
                    <FormInput type={"text"} label={"Caricamento"} icon={<FontAwesomeIcon icon={faSpinner} pulse={true}/>} disabled={true} validity={{
                        message: [<FontAwesomeIcon icon={faAddressCard} className={style.flipping}/>, " Take your time..."]
                    }}/>
                    <FormInput type={"text"} label={"OK!"} icon={<FontAwesomeIcon icon={faCheck}/>} validity={{
                        validity: Validity.OK,
                        message: "",
                    }}/>
                    <FormInput type={"text"} label={"È un angelo!"} icon={<FontAwesomeIcon icon={faExclamationTriangle}/>} validity={{
                        validity: Validity.WARNING,
                        message: "",
                    }}/>
                    <FormInput type={"text"} label={"Spinning Jesus"} icon={<FontAwesomeIcon icon={faCross} spin={true}/>} validity={{
                        validity: Validity.ERROR,
                        message: "",
                    }}/>
                    <FormInput type={"text"} label={"Ur mom"} icon={<FontAwesomeIcon icon={faCircle}/>} validity={{
                        validity: Validity.ERROR,
                        message: "ERROR: she is too fat for this input",
                    }}/>
                </Panel>
                <Panel title={"FormButtons"}>
                    Ma quindi era tutto...
                    <FormButton label={"...un bottone?"}>Lo è sempre stato.</FormButton>
                    <FormButton label={"...disattivato?"} disabled={true} icon={<FontAwesomeIcon icon={faXbox}/>} validity={{
                        message: "pls w8 a sec"
                    }}>Sì.</FormButton>
                    <FormButton label={"...una città?"} icon={<FontAwesomeIcon icon={faHouseUser}/>} validity={{
                        validity: Validity.OK,
                    }}>Lucianina?</FormButton>
                    <FormButton label={"...miele?"} icon={<FontAwesomeIcon icon={faBug}/>} validity={{
                        validity: Validity.WARNING,
                    }}>Not the bees!</FormButton>
                    <FormButton label={"...un Helios?"} icon={<FontAwesomeIcon icon={faRadiation}/>} validity={{
                        validity: Validity.ERROR,
                        message: "ERROR: è finito il metallo",
                    }}>[AVVIA ANNICHILIMENTO]</FormButton>
                </Panel>
            </Section>
        </Bluelib>
    );
}
