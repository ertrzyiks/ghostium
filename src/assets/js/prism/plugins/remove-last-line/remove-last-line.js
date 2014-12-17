Prism.hooks.add('after-highlight', function (env) {
    var pre = env.element.parentNode;
    if (pre && /pre/i.test(pre.nodeName) && pre.className.indexOf('line-numbers') === -1) {
        pre.className += ' line-numbers';
    }
});
