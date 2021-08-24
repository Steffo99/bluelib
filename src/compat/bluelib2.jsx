// noinspection JSUnusedGlobalSymbols,JSDeprecatedSymbols

import * as React from "react"
import { Box } from "../components/panels/Box"
import { Abbreviation } from "../components/semantics/Abbreviation"
import { LayoutFill } from "../components/layouts/LayoutFill"
import { LayoutThreeCol } from "../components/layouts/LayoutThreeCol"
import { Heading } from "../components/common/Heading"
import { Panel as PanelComponent } from "../components/panels/Panel"
import { Dialog } from "../components/panels/Dialog"
import { Parenthesis } from "../components/panels/Parenthesis"


/**
 * @deprecated
 */
const Deprecated = ({}) => (
    <Box todo={true}>
        This component is deprecated. Please use something different instead!
    </Box>
)

const Color = ({children, builtin, custom}) => {
    // noinspection JSUnresolvedFunction
    return React.cloneElement(children, {
        bluelibClassNames: builtin ? `color-${builtin}` : undefined,
        customColor: custom ? custom : undefined,
    })
}


const Help = ({text, children}) => (
    <Abbreviation title={text}>
        {children}
    </Abbreviation>
)


const Main = ({children}) => (
    <LayoutThreeCol>
        <LayoutThreeCol.Center>
            <main>
                {children}
            </main>
        </LayoutThreeCol.Center>
    </LayoutThreeCol>
)


const Panel = ({kind, title, children}) => {
    let Kind = {
        panel: PanelComponent,
        box: Box,
        blockquote: Dialog,
        aside: Parenthesis,
    }[kind]

    return (
        <Kind>
            <Heading level={3}>
                {title}
            </Heading>
            {children}
        </Kind>
    )
}


const Paragraph = ({children}) => (
    <p>
        {children}
    </p>
)


const Title = ({size, children}) => {
    let level = {
        "xxl": 1,
        "xl": 1,
        "l": 2,
        "m": 3,
        "s": 4,
        "xs": 5,
        "xxs": 6,
    }[size]

    return (
        <Heading level={level}>
            {children}
        </Heading>
    )
}


const Todo = ({children}) => (
    <Box todo={true}>
        {children}
    </Box>
)


// Components
export {Deprecated as Align}
export {Anchor} from "../components/common/Anchor"
export {Parenthesis as Aside} from "../components/panels/Parenthesis"
export {Deprecated as BaseLink}
export {Dialog as Blockquote} from "../components/panels/Dialog"
export {Bluelib} from "../components/Bluelib"
export {BringAttention as Bold} from "../components/semantics/BringAttention"
export {Box} from "../components/panels/Box"
export {Button} from "../components/inputs/Button"
export {Deprecated as Code}
export {Color}
export {Form} from "../components/forms/Form"
export {FormField as FormElement} from "../components/forms/FormField"
export {Button as FormSubmit} from "../components/inputs/Button"
export {Help}
export {Field as InputField} from "../components/inputs/Field"
export {Idiomatic as Italic} from "../components/semantics/Idiomatic"
export {Deprecated as LatexMath}
export {ListItem} from "../components/lists/ListItem"
export {Main}
export {Panel}
export {Paragraph}
export {Separator} from "../components/separators/Separator"
export {Deprecated as Size}
export {Chapter as Split} from "../components/chapters/Chapter"
export {Deprecated as Spoiler}
export {Strikethrough as Strike} from "../components/semantics/Strikethrough"
export {Title}
export {Todo}
export {UAnnotation as Underline} from "../components/semantics/UAnnotation"
export {Deprecated as VisualErrorBoundary}
export {Deprecated as VisualLog}
