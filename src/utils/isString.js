export default function isString(obj) {
    // https://stackoverflow.com/a/7772724/4334568
    return typeof(obj) === "string" || obj instanceof String
}
