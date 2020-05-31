export default function (config, env, helpers) {
    // noinspection JSUnresolvedVariable
    config.resolve.alias["react"] = "preact/compat";
    // noinspection JSUnresolvedVariable
    config.resolve.alias["react-dom"] = "preact/compat";
};
