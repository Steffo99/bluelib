export default function(f) {
    return function(event) {
        return f(event.target.value)
    }
}
