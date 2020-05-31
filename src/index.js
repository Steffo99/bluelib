import Box from "./components/Elements/Box"
import {BoxColors} from "./components/Elements/Box";
import Image from "./components/Elements/Image"
import Panel from "./components/Elements/Panel";
import Section from "./components/Elements/Section";
import TablePanel from "./components/Elements/TablePanel";
import Timer from "./components/Elements/Timer";
import Todo from "./components/Elements/Todo";
import Footer from "./components/Layout/Footer";
import Split from "./components/Layout/Split";
import Code from "./components/Rendering/Code";
import Latex from "./components/Rendering/Latex";
import BLatex from "./components/Rendering/BLatex";
import ILatex from "./components/Rendering/ILatex";
import PLatex from "./components/Rendering/PLatex";
import LatexDefaultInline from "./contexts/LatexDefaultInline";
import LatexRenderColor from "./contexts/LatexRenderColor";
import Markdown from "./components/Rendering/Markdown";

export {
    Box,
    BoxColors,
    Image,
    Panel,
    Section,
    TablePanel,
    Timer,
    Todo,
    Footer,
    Split,
    Code,
    Latex,
    BLatex,
    ILatex,
    PLatex,
    LatexDefaultInline,
    LatexRenderColor,
    Markdown,
};


import {Fragment} from "preact";
// noinspection JSUnusedGlobalSymbols
export default function() {
    require("./styles/theme.less");
    return (
        <Fragment>
            <h1>
                bluelib
            </h1>
            <Split>
                <Box>
                    Hi. I'm a box!
                </Box>
                <Box color={BoxColors.RED}>
                    Hi. I'm a box, but I'm red!
                </Box>
                <Box color={BoxColors.LIME}>
                    Hi. I was here third!
                </Box>
            </Split>
        </Fragment>
    )
}
