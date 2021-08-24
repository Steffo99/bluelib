import { Bluelib } from "../src/components/Bluelib"


export const parameters = {
    argTypes: {
        bluelibClassNames: {
            control: {type: "string"},
            description: "Additional Bluelib classNames to be appended to the element's classNames",
            table: {category: "Global props"}
        },
        customColor: {
            control: {type: "color"},
            description: "Apply a Bluelib custom color to the element",
            table: {category: "Global props"}
        },
        disabled: {
            control: {type: "boolean"},
            description: "Apply the disabled status to an element",
            table: {category: "Global props"}
        }
    },
    options: {
        storySort: {
            order: [
                "Core",
                "Layouts",
                "Panels",
                "Chapters",
                "Separators",
                "Images",
                "Tables",
                "Lists",
                "Status",
                "Inputs",
                "Forms",
                "Common",
                "Annotations",
                "Semantics",
                "Colors",
                "Internals",
            ]
        }
    },
}