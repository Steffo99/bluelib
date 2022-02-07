// FIXME: Converting this to TypeScript breaks the transpiler. Why? I have absolutely no idea. JS is a mess.

export function split(obj, ...keyGroups) {
    const results = keyGroups.map((_) => {return {}})
    const other = {}
    
    Object.entries(obj).forEach(([k, v]) => {
        let matched = false
        keyGroups.forEach((keyGroup, index) => {
            if(keyGroup.includes(k)) {
                results[index][k] = v
                matched = true
            }
        })

        if(!matched) {
            other[k] = v
        }
    })

    results.push(other)
    return results
}


export function splitInTwo (obj, keyGroup) {
    return split(obj, keyGroup)
}
