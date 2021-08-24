// noinspection JSUnusedGlobalSymbols,JSDeprecatedSymbols

import { Box } from "../components/panels/Box";
import { Heading } from "../components/common/Heading"
import { Chapter } from "../components/chapters/Chapter"
import { Table } from "../components/tables/Table"
import { FormPair } from "../components/forms/FormPair"
import { LayoutFill } from "../components/layouts/LayoutFill"


/**
 * @deprecated
 */
const Deprecated = ({}) => (
    <Box todo={true}>
        This component is deprecated. Please use something different instead!
    </Box>
)


const Todo = ({children}) => (
    <Box todo={true}>
        {children}
    </Box>
)

const Panel = ({children, title}) => (
    <Box>
        <Heading level={3}>{title}</Heading>
        {children}
    </Box>
)

const Section = ({children, title}) => (
    <Chapter>
        <Heading level={2}>{title}</Heading>
        {children}
    </Chapter>
)

const TablePanel = ({children}) => (
    <Box>
        <Table>
            {children}
        </Table>
    </Box>
)

const FormRow = ({label, validity, children}) => (
    <FormPair label={label} input={children} validity={validity.validity}/>
)

const BasicContainer = ({children}) => (
    <LayoutFill>
        <LayoutFill.Single>
            {children}
        </LayoutFill.Single>
    </LayoutFill>
)


// Elements
export {Anchor as BaseLink} from "../components/common/Anchor"
export {Image} from "../components/images/Image"
export {Deprecated as Timer}
export {Todo}

// Forms
export {Button as FormButton} from "../components/inputs/Button"
export {FormField as FormInput} from "../components/forms/FormField"
export {FormRow}

// Layout
export {BasicContainer}
export {Deprecated as Bottom}
export {Deprecated as LeftRight}
export {Chapter as Split} from "../components/chapters/Chapter"
export {Deprecated as Unmargin}

// Panels
export {Box} from "../components/panels/Box"
export {Panel}
export {Section}
export {TablePanel}

// Rendering
export {Deprecated as BLatex}
export {Deprecated as Code}
export {Deprecated as ILatex}
export {Deprecated as Latex}
export {Deprecated as Markdown}
export {Deprecated as PLatex}
