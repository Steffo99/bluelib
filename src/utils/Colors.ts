import Color from "color"

export type CustomColor = Color;

/**
 * The classNames of the colors builtin in Bluelib.
 */
export enum BuiltinColor {
    RED = "color-red",
    ORANGE = "color-orange",
    YELLOW = "color-yellow",
    LIME = "color-lime",
    CYAN = "color-cyan",
    BLUE = "color-blue",
    MAGENTA = "color-magenta",
}


/**
 * A bluelib color of any type, either builtin or custom.
 */
export type AnyColor = BuiltinColor | CustomColor


/**
 * Convert a {@link CustomColor} to an object containing the `--bluelib-${name}-r`, `--bluelib-${name}-g` and `--bluelib-${name}-b` properties, to be passed in
 * a `style` prop.
 *
 * Will return `None` if the `color` parameter is falsy.
 *
 * @param name - The property "name", to be filled in the template string described above.
 * @param color - The color to convert.
 */
export function colorToBluelibStyle(name: string, color?: CustomColor): {[key: string]: number} {
    if(!color) {
        return {}
    }

    const result: {[key: string]: number} = {}

    result[`--bluelib-${name}-r`] = color.red()
    result[`--bluelib-${name}-g`] = color.green()
    result[`--bluelib-${name}-b`] = color.blue()

    return result
}
