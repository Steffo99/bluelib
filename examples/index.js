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


/**
 * List of all `<style>` {@link HTMLElement}s with an id starting with `less:dist`.
 *
 * @type {{string: HTMLElement} | undefined}
 */
let lessStyles = undefined

/**
 * List of all `<style>` {@link HTMLElement}s with an id starting with `less:dist-colors`.
 *
 * @type {{string: HTMLElement} | undefined}
 */
let lessColors = undefined

/**
 * List of all `<style>` {@link HTMLElement}s with an id starting with `less:dist-fonts`.
 *
 * @type {{string: HTMLElement} | undefined}
 */
let lessFonts = undefined

/**
 * The background element.
 *
 * @type {HTMLElement | undefined}
 */
let background = undefined


/**
 * Find the `<style>` {@link HTMLElement}s with an id starting with `less:dist`, and compile them into a {`id`: `element`} object.
 *
 * @returns {{string: HTMLElement}}
 */
function findLessStyles() {
	// noinspection JSValidateTypes
	return [...document.styleSheets].filter(
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
}

/**
 * Find the `<style>` {@link HTMLElement}s with an id starting with `less:dist-colors`, and compile them into a {`id`: `element`} object.
 *
 * @returns {{string: HTMLElement}}
 */
function findLessColors() {
	// noinspection JSValidateTypes
	return [...document.styleSheets].filter(
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
}

/**
 * Find the `<style>` {@link HTMLElement}s with an id starting with `less:dist-fonts`, and compile them into a {`id`: `element`} object.
 *
 * @returns {{string: HTMLElement}}
 */
function findLessFonts() {
	// noinspection JSValidateTypes
	return [...document.styleSheets].filter(
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
}

/**
 * Find and return the {@link HTMLElement} with the `layout-center-background` class.
 *
 * @returns {HTMLElement}
 */
function findBackground() {
	return document.getElementsByClassName("layout-center-background")[0]
}

/**
 * Allows the user to dynamically interact with bluelib via the interactive components available on the page.
 *
 * Set the values of {@link lessStyles}, {@link lessColors}, {@link lessFonts} and {@link background}.
 *
 * Sets the enabled state of the all {@link lessStyles} depending on their inclusion in the {@link enabledByDefault} array.
 *
 * Enables and unfades all input elements with the class `ruleset-toggle`.
 *
 * @returns {Promise<void>}
 */
async function enableChanges() {
	await sleepUntilLessIsDone()

	lessStyles = findLessStyles()
	console.debug("Found Less stylesheets:", lessStyles)

	lessColors = findLessColors()
	console.debug("Found Less colors:", lessColors)

	lessFonts = findLessFonts()
	console.debug("Found Less fonts:", lessFonts)

	background = findBackground()
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
