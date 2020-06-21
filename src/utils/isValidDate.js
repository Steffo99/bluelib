export default function(d) {
    return d instanceof Date && !isNaN(d.getTime())
}
