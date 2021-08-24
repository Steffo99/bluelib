import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { UAnnotation as UAnnotationComponent } from "./UAnnotation"


export default {
    component: UAnnotationComponent,
    title: "Semantics/U Annotation",
    decorators: [Decorators.Bluelib],
}


export const UAnnotation = props => (
    <UAnnotationComponent {...props}>This text is annotated without any comment.</UAnnotationComponent>
)
UAnnotation.args = {}
