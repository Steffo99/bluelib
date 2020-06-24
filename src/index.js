import Box from "./components/Panels/Box";
import {BoxColors} from "./components/Panels/Box";
import Image from "./components/Elements/Image";
import Panel from "./components/Panels/Panel";
import Section from "./components/Panels/Section";
import TablePanel from "./components/Panels/TablePanel";
import Timer from "./components/Elements/Timer";
import Todo from "./components/Elements/Todo";

import FormRow from "./components/Forms/FormRow";
import FormInput from "./components/Forms/FormInput";
import FormButton from "./components/Forms/FormButton";
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
import RoyalnetInstanceUrl from "./contexts/RoyalnetInstanceUrl";
import RoyalnetLoginStatus from "./contexts/RoyalnetLoginStatus";

import Validity from "./enums/Validity";

import useFormValidator from "./hooks/useFormValidator";
import useLoginDataStorage from "./hooks/useLoginDataStorage";
import useRoyalnetData from "./hooks/useRoyalnetData";
import useRoyalnetInstanceValidator from "./hooks/useRoyalnetInstanceValidator";

import theme from "./styles/theme.less";

import concatClass from "./utils/concatClass";
import getEventValue from "./utils/getEventValue";
import isString from "./utils/isString";
import isValidDate from "./utils/isValidDate";
import stripTabs from "./utils/stripTabs";
import {royalnetApiRequest, RoyalnetApiError} from "./utils/royalnetApiRequest";

import Sample from "./routes/Sample";
export default function(props) {
    return <Sample/>
}

export {
    Box,
    BoxColors,
    Image,
    Panel,
    Section,
    TablePanel,
    Timer,
    Todo,

    FormRow,
    FormInput,
    FormButton,
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
    RoyalnetInstanceUrl,
    RoyalnetLoginStatus,

    Validity,

    useFormValidator,
    useLoginDataStorage,
    useRoyalnetData,
    useRoyalnetInstanceValidator,

    theme,

    concatClass,
    getEventValue,
    isString,
    isValidDate,
    stripTabs,
    royalnetApiRequest,
    RoyalnetApiError,
}
