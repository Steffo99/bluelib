/**
 * (Ab)use UNPKG to retrieve the latest Bluelib semantic version.
 *
 * @returns {Promise<string>}
 */
async function getLatestSemver() {
	const resp = await fetch("https://unpkg.com/@steffo/bluelib/package.json")
	const data = await resp.json()
	return data.version
}

/**
 * The latest version of Bluelib, or `undefined` if it has not been retrieved yet.
 *
 * @type {string | undefined}
 */
let version = undefined

/**
 * Initialize {@link version} by calling {@link getLatestSemver}.
 */
async function initVersion() {
	console.debug("[Bluelib] Getting version info via UNPKG...")
	version = await getLatestSemver()
	console.info("[Bluelib] Latest Bluelib version is:", version)
}


/**
 * {@link RegExp} to acquire the base name (`"classic"`) from a Less stylesheet id (`"less:dist-classic:root"`).
 *
 * @type {RegExp}
 */
const baseNameFromStyleIdRegex = new RegExp("^less:dist-([a-z-]+):root$")

/**
 * Acquire the base name (`"classic"`) from a Less stylesheet id (`"less:dist-classic:root"`).
 *
 * @param styleId The Less stylesheet id (`"less:dist-classic:root"`).
 * @returns {string | undefined} The base name (`"classic"`).
 */
function getBaseNameFromStyleId(styleId) {
	return styleId.match(baseNameFromStyleIdRegex)[1]
}

/**
 * Generate the Less stylesheet id (`"less:dist-classic:root"`) from a base name (`"classic"`).
 */
function getStyleIdFromBaseName(baseName) {
	return `less:dist-${baseName}:root`
}

/**
 * Generate the UNPKG URL (`"https://unpkg.com/@steffo/bluelib@8.1.0/dist/classic.root.min.css"`) from a version (`"8.1.0"`), a base name (`"classic"`) and a selectorset (`"root"`).
 */
function getUnpkgUrlFromBaseName(baseName, version, selectorset) {
	return `https://unpkg.com/@steffo/bluelib@${version}/dist/${baseName}.${selectorset}.min.css`
}

/**
 * Generate the JS import path (`"@steffo/bluelib/dist/classic.root.css"`) from a base name (`"classic"`) and a selectorset (`"root"`).
 */
function getJSImportPathFromBaseName(baseName, selectorSet) {
	return `@steffo/bluelib/dist/${baseName}.${selectorSet}.css`
}


/**
 * Check if the less compiler is done rendering Less stylesheets into CSS.
 *
 * @returns {boolean} `true` if the rendering is complete, `false` otherwise.
 */
function isLessDone() {
	const lessSheets = document.querySelectorAll("head link[rel=\"stylesheet/less\"]")
	const cssSheets = document.querySelectorAll("head style")

	return lessSheets.length === cssSheets.length
}

/**
 * Pause an async function until {@link isLessDone Less is done}.
 *
 * @returns {Promise<void>} Awaitable that waits until {@link isLessDone Less is done}.
 */
async function sleepUntilLessIsDone() {
	console.debug("[Bluelib] Waiting for Less to finish compiling stylesheets...")
	while(!isLessDone()) {
		await new Promise(resolve => setTimeout(resolve, 100))
	}
	console.debug("[Bluelib] Less seems to have finished compiling stylesheets.")
}


/**
 * Return a map of base names to their corresponding {@link HTMLStyleElement}s.
 *
 * @returns {{[string]: HTMLStyleElement}}
 */
function getCompiledLessStylesheets() {
	return [...document.styleSheets].filter(
		(s) => s.ownerNode.id.startsWith("less:dist"),
	).map(
		(s) => (
			{ [getBaseNameFromStyleId(s.ownerNode.id)]: s }
		),
	).reduce(
		(p, c) => (
			{ ...p, ...c }
		),
		{},
	)
}

/**
 * Object mapping base names to their corresponding {@link HTMLStyleElement}s. Needs to be initialized.
 *
 * @type {{[string]: HTMLStyleElement} | undefined}
 */
let styleFromBaseName = undefined

/**
 * Initialize {@link styleFromBaseName} by calling {@link getCompiledLessStylesheets}.
 */
function initStyleFromBaseName() {
	console.debug("[Bluelib] Detecting compiled styles...")
	styleFromBaseName = getCompiledLessStylesheets()
	console.info("[Bluelib] The following styles are available:", styleFromBaseName)
}


/**
 * List of valid rulesets, in the order they should be enabled in.
 */
const rulesets = [
	"base",
	"classic",
	"glass",
	"fun",
	"layouts-center",
	"colors-royalblue",
	"colors-amber",
	"colors-pixeldawn",
	"colors-purplestar",
	"fonts-fira-ghpages",
]

/**
 * Function to pass to {@link sort} to sort a list of base names in the order of {@link rulesets}.
 */
function rulesetsSorter(a, b) {
	return rulesets.indexOf(a) - rulesets.indexOf(b)
}


/**
 * List of currently enabled rulesets, not in any particular order.
 */
const rulesetsEnabled = [
	"base",
	"classic",
	"glass",
	"layouts-center",
	"colors-royalblue",
	"fonts-fira-ghpages",
]

/**
 * Sort {@link rulesetsEnabled} using {@link rulesetsSorter}.
 */
function sortRulesetsEnabled() {
	console.debug("[Bluelib] Sorting rulesets:", rulesetsEnabled)
	rulesetsEnabled.sort(rulesetsSorter)
	console.debug("[Bluelib] Sorted rulesets:", rulesetsEnabled)
}

/**
 * Add a ruleset to {@link rulesetsEnabled}, if it doesn't already exist.
 */
function enableRuleset(baseName) {
	const pos = rulesetsEnabled.indexOf(baseName)
	if(pos) {
		rulesetsEnabled.push(baseName)
	}
}

/**
 * Remove a ruleset from {@link rulesetsEnabled}, if it exists.
 */
function disableRuleset(baseName) {
	const pos = rulesetsEnabled.indexOf(baseName)
	if(pos) {
		rulesetsEnabled.splice(pos, 1)
	}
}

/**
 * {@link enableRuleset} or {@link disableRuleset}, based on the value of `shouldBeEnabled`.
 */
function setRuleset(baseName, shouldBeEnabled) {
	if(shouldBeEnabled) {
		enableRuleset(baseName)
	}
	else {
		disableRuleset(baseName)
	}
}


/**
 * Synchronize {@link rulesetsEnabled} with the {@link document}.
 */
function sync() {
	console.debug("[Bluelib] Syncing enabled rulesets:", rulesetsEnabled)
	// Toggle Less-compiled stylesheets
	for(const [baseName, element] of Object.entries(styleFromBaseName)) {
		element.disabled = !rulesetsEnabled.includes(baseName)
		console.debug("[Bluelib] State of", baseName, element, "changed to", !element.disabled)
	}
	console.debug("[Bluelib] Done syncing enabled rulesets.")
}

/**
 * Allow the user to interact with the various interactable components of the page.
 */
function allowInteraction() {
	console.debug("[Bluelib] Enabling interaction on elements...")
	for(const element of document.querySelectorAll("#panel-rulesets-toggleable input")) {
		console.debug("[Bluelib] Enabling interaction on:", element)
		element.disabled = false
		element.addEventListener("input", onToggleableRulesetToggle)
		element.parentElement.classList.remove("fade")
	}
	console.info("[Bluelib] Example page is ready!")
}


/**
 * Event callback for ruleset toggles in the page.
 *
 * @param event {Event} The triggered event.
 */
function onToggleableRulesetToggle(event) {
	const baseName = event.target.value
	const shouldBeEnabled = event.target.checked
	console.debug("[Bluelib] Received onRulesetToggle ", baseName, shouldBeEnabled)
	setRuleset(baseName, shouldBeEnabled)
	sortRulesetsEnabled()
	sync()
}

/**
 * Event callback for {@link window} load.
 */
async function onWindowLoad() {
	await initVersion()
	await sleepUntilLessIsDone()
	initStyleFromBaseName()
	sortRulesetsEnabled()
	sync()
	allowInteraction()
}


window.onload = onWindowLoad
