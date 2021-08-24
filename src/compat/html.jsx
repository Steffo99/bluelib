// noinspection JSUnusedGlobalSymbols,ES6PreferShortImport

import {Heading} from "../components/common/Heading"

// -----

export {Ruby} from "../components/annotations/Ruby"

export {Chapter} from "../components/chapters/Chapter"

export {Anchor as A} from "../components/common/Anchor"
export {Heading as H}
export const H1 = ({children}) => <Heading level={1}>{children}</Heading>
export const H2 = ({children}) => <Heading level={2}>{children}</Heading>
export const H3 = ({children}) => <Heading level={3}>{children}</Heading>
export const H4 = ({children}) => <Heading level={4}>{children}</Heading>
export const H5 = ({children}) => <Heading level={5}>{children}</Heading>
export const H6 = ({children}) => <Heading level={6}>{children}</Heading>

export {Form} from "../components/forms/Form"

export {Image as Img} from "../components/images/Image"

export {Area as Textarea} from "../components/inputs/Area"
export {Button} from "../components/inputs/Button"
export {Checkbox} from "../components/inputs/Checkbox"
export {Field} from "../components/inputs/Field"
export {Multiselect} from "../components/inputs/Multiselect"
export {Radio} from "../components/inputs/Radio"
export {Select} from "../components/inputs/Select"

export {LayoutFill} from "../components/layouts/LayoutFill"
export {LayoutThreeCol} from "../components/layouts/LayoutThreeCol"
export {Footer} from "../components/layouts/Footer"

export {ListDescription as DL} from "../components/lists/ListDescription"
export {ListOrdered as OL} from "../components/lists/ListOrdered"
export {ListUnordered as UL} from "../components/lists/ListUnordered"

export {Box} from "../components/panels/Box"
export {Dialog} from "../components/panels/Dialog"
export {Panel} from "../components/panels/Panel"
export {Parenthesis} from "../components/panels/Parenthesis"

export {Abbreviation as Abbr} from "../components/semantics/Abbreviation"
export {BringAttention as B} from "../components/semantics/BringAttention"
export {Cite} from "../components/semantics/Cite"
export {Code} from "../components/semantics/Code"
export {Definition as Dfn} from "../components/semantics/Definition"
export {Emphasis as Em} from "../components/semantics/Emphasis"
export {Idiomatic as I} from "../components/semantics/Idiomatic"
export {Mark} from "../components/semantics/Mark"
export {Quote as Q} from "../components/semantics/Quote"
export {Sample as Samp} from "../components/semantics/Sample"
export {Strikethrough as S} from "../components/semantics/Strikethrough"
export {Strong} from "../components/semantics/Strong"
export {UAnnotation as U} from "../components/semantics/UAnnotation"
export {Variable as Var} from "../components/semantics/Variable"

export {Separator as Hr} from "../components/separators/Separator"

export {Table} from "../components/tables/Table"

export {Bluelib} from "../components/Bluelib"
export {Bluelib as default} from "../components/Bluelib"
