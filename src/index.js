import Box from "./components/Elements/Box";
import {BoxColors} from "./components/Elements/Box";
import Image from "./components/Elements/Image";
import Panel from "./components/Elements/Panel";
import Section from "./components/Elements/Section";
import TablePanel from "./components/Elements/TablePanel";
import Timer from "./components/Elements/Timer";
import Todo from "./components/Elements/Todo";

import Split from "./components/Layout/Split";

import BLatex from "./components/Rendering/BLatex";
import Code from "./components/Rendering/Code";
import ILatex from "./components/Rendering/ILatex";
import Latex from "./components/Rendering/Latex";
import {LatexDisplay} from "./components/Rendering/Latex";
import Markdown from "./components/Rendering/Markdown";
import PLatex from "./components/Rendering/PLatex";

import LatexDefaultDisplay from "./contexts/LatexDefaultDisplay";
import LatexDefaultInline from "./contexts/LatexDefaultInline";
import LatexRenderColor from "./contexts/LatexRenderColor";

import theme from "./styles/theme.less";

import stripTabs from "./utils/stripTabs";


export {
    Box,
    BoxColors,
    Image,
    Panel,
    Section,
    TablePanel,
    Timer,
    Todo,
    Split,
    BLatex,
    Code,
    ILatex,
    Latex,
    LatexDisplay,
    Markdown,
    PLatex,
    LatexDefaultDisplay,
    LatexDefaultInline,
    LatexRenderColor,
    theme,
    stripTabs
}
