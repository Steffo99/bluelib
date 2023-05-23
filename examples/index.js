/**
 * Check if the less compiler is done rendering Less stylesheets into CSS.
 *
 * @returns {boolean} `true` if the rendering is complete, `false` otherwise.
 */
function isLessDone() {
	const lessSheets = document.querySelectorAll("link[rel=\"stylesheet/less\"]")
	const cssSheets = document.querySelectorAll("style")

	return lessSheets.length === cssSheets.length
}


/**
 * Pause an async function until {@link isLessDone Less is done}.
 *
 * @returns {Promise<void>} Awaitable that waits until {@link isLessDone Less is done}.
 */
async function sleepUntilLessIsDone() {
	while(!isLessDone()) {
		await new Promise(resolve => setTimeout(resolve, 100))
		console.debug("[Bluelib] Less seems to be done processing.")
	}
}


/**
 * List of stylesheet ids that should be enabled on page load.
 *
 * @type {string[]}
 */
const enabledByDefault = [
	"less:dist-base:root",
	"less:dist-classic:root",
	"less:dist-glass:root",
	"less:dist-layouts-center:root",
	"less:dist-colors-royalblue:root",
	"less:dist-fonts-fira-ghpages:root",
]


let lessStyles = undefined
let lessColors = undefined
let lessFonts = undefined
let background = undefined


async function enableChanges() {
	await sleepUntilLessIsDone()

	lessStyles = [...document.styleSheets].filter(
		(s) => s.ownerNode.id.startsWith("less:dist"),
	).map(
		(s) => (
			{ [s.ownerNode.id]: s }
		),
	).reduce(
		(p, c) => (
			{ ...p, ...c }
		),
		{},
	)
	console.debug("Found Less stylesheets:", lessStyles)

	lessColors = [...document.styleSheets].filter(
		(s) => s.ownerNode.id.startsWith("less:dist-colors"),
	).map(
		(s) => (
			{ [s.ownerNode.id]: s }
		),
	).reduce(
		(p, c) => (
			{ ...p, ...c }
		),
		{},
	)
	console.debug("Found Less colors:", lessColors)

	lessFonts = [...document.styleSheets].filter(
		(s) => s.ownerNode.id.startsWith("less:dist-fonts"),
	).map(
		(s) => (
			{ [s.ownerNode.id]: s }
		),
	).reduce(
		(p, c) => (
			{ ...p, ...c }
		),
		{},
	)
	console.debug("Found Less fonts:", lessFonts)

	background = document.querySelector(".layout-center-background")
	console.debug("Found background:", background)

	for(const [k, v] of Object.entries(lessStyles)) {
		v.disabled = !enabledByDefault.includes(k)
	}

	for(const input of document.querySelectorAll(".ruleset-toggle")) {
		input.disabled = false
		input.parentElement.classList.remove("fade")
	}
}


function toggleStyle(name) {
	if(lessStyles === undefined) {
		console.error("Less stylesheets are not yet available.")
		return
	}

	const style = lessStyles[name]
	if(style === undefined) {
		console.error("No such Less stylesheet.")
		return
	}

	style.disabled = !style.disabled
}


function selectColor(name, bgsrc) {
	if(lessColors === undefined) {
		console.error("Less stylesheets are not yet available.")
		return
	}

	const style = lessStyles[name]
	if(style === undefined) {
		console.error("No such Less stylesheet.")
		return
	}

	for(const c of Object.values(lessColors)) {
		c.disabled = true
	}

	style.disabled = false
	background.src = bgsrc
}


enableChanges()
