(function() {
    window.DocsifyFooterPlugin = function() {
        return function(hook) {
            const footer = `
                <hr>
                <footer>
                    <span><a href="https://www.lewiscommunications.com">Lewis Communications</a> &copy; ${(new Date().getFullYear())}</span>
                    <span>Published with <a href="https://github.com/docsifyjs/docsify" target="_blank">docsify</a>.</span>
                </footer>
            `;

            hook.afterEach(function(html) {
                return html + footer;
            });
        };
    };
})();
