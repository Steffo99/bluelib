import BaseLink from "./components/Elements/BaseLink";
import BasicContainer from "./components/Layout/BasicContainer";
import BLatex from "./components/Rendering/BLatex";
import Box from "./components/Panels/Box";
import Code from "./components/Rendering/Code";
import concatClass from "./utils/concatClass";
import CurrentPage from "./contexts/CurrentPage";
import FormButton from "./components/Forms/FormButton";
import FormInput from "./components/Forms/FormInput";
import FormRow from "./components/Forms/FormRow";
import getEventValue from "./utils/getEventValue";
import ILatex from "./components/Rendering/ILatex";
import Image from "./components/Elements/Image";
import isString from "./utils/isString";
import isValidDate from "./utils/isValidDate";
import Latex from "./components/Rendering/Latex";
import LatexDefaultDisplay from "./contexts/LatexDefaultDisplay";
import LatexDefaultInline from "./contexts/LatexDefaultInline";
import LatexRenderColor from "./contexts/LatexRenderColor";
import LeftRight from "./components/Layout/LeftRight";
import Markdown from "./components/Rendering/Markdown";
import Panel from "./components/Panels/Panel";
import PLatex from "./components/Rendering/PLatex";
import RoyalnetInstanceUrl from "./contexts/RoyalnetInstanceUrl";
import RoyalnetLoginStatus from "./contexts/RoyalnetLoginStatus";
import Section from "./components/Panels/Section";
import Split from "./components/Layout/Split";
import stripTabs from "./utils/stripTabs";
import TablePanel from "./components/Panels/TablePanel";
import theme from "./components/Bluelib.less";
import Timer from "./components/Elements/Timer";
import Todo from "./components/Elements/Todo";
import useFormValidator from "./hooks/useFormValidator";
import useLoginDataStorage from "./hooks/useLoginDataStorage";
import useRoyalnetData from "./hooks/useRoyalnetData";
import useRoyalnetInstanceValidator from "./hooks/useRoyalnetInstanceValidator";
import Validity from "./enums/Validity";
import {BoxColors} from "./components/Panels/Box";
import {LatexDisplay} from "./components/Rendering/Latex";
import {royalnetApiRequest, RoyalnetApiError} from "./utils/royalnetApiRequest";
import Bluelib from "./components/Bluelib";
import Bottom from "./components/Layout/Bottom";
import Unmargin from "./components/Layout/Unmargin";
import CodeDefaultStyle from "./contexts/CodeDefaultStyle";
import CodeDefaultLanguage from "./contexts/CodeDefaultLanguage";


import Sample from "./routes/Sample";
export default function(props) {
    return <Sample/>
}

export {
    BaseLink,
    BasicContainer,
    BLatex,
    Box,
    BoxColors,
    Code,
    concatClass,
    CurrentPage,
    FormButton,
    FormInput,
    FormRow,
    getEventValue,
    ILatex,
    Image,
    isString,
    isValidDate,
    Latex,
    LatexDefaultDisplay,
    LatexDefaultInline,
    LatexDisplay,
    LatexRenderColor,
    LeftRight,
    Markdown,
    Panel,
    PLatex,
    RoyalnetApiError,
    royalnetApiRequest,
    RoyalnetInstanceUrl,
    RoyalnetLoginStatus,
    Section,
    Split,
    stripTabs,
    TablePanel,
    theme,
    Timer,
    Todo,
    useFormValidator,
    useLoginDataStorage,
    useRoyalnetData,
    useRoyalnetInstanceValidator,
    Validity,
    Bluelib,
    Bottom,
    Unmargin,
    CodeDefaultStyle,
    CodeDefaultLanguage,
}
