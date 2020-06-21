export default function concatClass(...args) {
    let result = "";

    for(let i = 0; i < args.length; i++) {
        let arg = args[i];
        if(arg instanceof Array) {
            result += concatClass(...arg)
        }
        else if(typeof arg == "string" || arg instanceof String) {
            result += arg
        }
        else if(arg === null || arg === undefined) {
            continue
        }
        else {
            throw Error(`Invalid type '${typeof(arg)}' passed to extendableClasses, which only accepts Arrays and Strings.`)
        }

        if(i < args.length - 1) {
            result += " "
        }
    }

    return result
}
