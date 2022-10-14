let retrievedElements = false

let pageHead = null
let styleBase = null
let styleClassic = null
let styleGlass = null
let styleColors = null
let styleFonts = null

let checkboxBase = null
let checkboxClassic = null
let checkboxGlass = null
let selectColors = null
let selectFonts = null

function retrieveElements() {
    if(retrievedElements) return

    console.debug("Finding elements in the DOM...")
    
    pageHead = document.querySelector("head")
    styleBase = document.querySelector("#less\\:dist-base\\:root")
    styleClassic = document.querySelector("#less\\:dist-classic\\:root")
    styleGlass = document.querySelector("#less\\:dist-glass\\:root")
    styleColors = document.querySelector("#less\\:dist-colors\\:root")
    styleFonts = document.querySelector("#less\\:dist-fonts\\:root")

    checkboxBase = document.querySelector("input[name='bluelib-base']")
    checkboxClassic = document.querySelector("input[name='bluelib-classic']")
    checkboxGlass = document.querySelector("input[name='bluelib-glass']")
    selectColors = document.querySelector("select[name='bluelib-colors']")
    selectFonts = document.querySelector("select[name='bluelib-fonts']")

    retrievedElements = true

    console.debug("Found all elements!")
}


function onRulesetChange(target) {
    retrieveElements()
    
    if(target === checkboxGlass) {
        if(target.checked) {
            pageHead.appendChild(styleGlass)
        }
        else {
            styleGlass.remove()
        }
    }

    if(target === checkboxClassic) {
        if(target.checked) {
            pageHead.appendChild(styleClassic)
        }
        else {
            styleClassic.remove()
        }
    }

    if(target === checkboxBase) {
        if(target.checked) {
            pageHead.appendChild(styleBase)
        }
        else {
            styleBase.remove()
        }
    }
}
