export function disable(isDisabled, thing, whenDisabled = null) {
    return isDisabled ? whenDisabled : thing;
}

export function disableClass(isDisabled) {
    return isDisabled ? `status-disabled` : null
}
