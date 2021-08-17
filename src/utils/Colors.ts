import Color from "color"


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
 * Convert a {@link Color} to an object containing the `--bluelib-${name}-r`, `--bluelib-${name}-g` and `--bluelib-${name}-b` properties, to be passed in
 * a `style` prop.
 *
 * Will return `None` if the `color` parameter is falsy.
 *
 * @param name - The property "name", to be filled in the template string described above.
 * @param color - The color to convert.
 */
export function colorToBluelibStyle(name: string, color?: typeof Color): {[key: string]: number} {
    const colorObj = Color(color)

    if(!color) {
        return {}
    }

    const result: {[key: string]: number} = {}

    result[`--bluelib-${name}-r`] = colorObj.red()
    result[`--bluelib-${name}-g`] = colorObj.green()
    result[`--bluelib-${name}-b`] = colorObj.blue()

    return result
}
