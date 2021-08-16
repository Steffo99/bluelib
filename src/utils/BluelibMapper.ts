import classNames from "classnames"
import * as Types from "../types"
import Skeleton from "../bluelib/src/targets/skeleton.module.css"


/**
 * Get the Bluelib module classNames given a string of root classNames.
 *
 * @param inputClassName - The root classNames.
 */
export function rootToModule(inputClassName: Types.ClassNames): string {
    const flattenedClassName = classNames(inputClassName)
    const flattenedClassNames: string[] = flattenedClassName.split(" ")
    const skeletonClassNames: string[] = flattenedClassNames.map(value => Skeleton[value])
    const skeletonClassName = classNames(skeletonClassNames)

    return skeletonClassName
}
