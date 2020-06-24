export default function (config, env, helpers) {
    config.module.rules[4].include = [env.source(".")]
    config.module.rules[5].exclude = [env.source(".")]

    // noinspection JSUnresolvedVariable
    config.resolve.alias["react"] = "preact/compat";
    // noinspection JSUnresolvedVariable
    config.resolve.alias["react-dom"] = "preact/compat";
};
