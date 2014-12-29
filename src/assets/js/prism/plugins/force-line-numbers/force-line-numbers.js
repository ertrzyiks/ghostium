Prism.hooks.add('after-highlight', function (env) {
    env.code = env.code.replace(/^\s+|\s+$/g, '');
});
