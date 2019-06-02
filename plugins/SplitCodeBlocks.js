window.SplitCodeBlocks = (function() {
    function buildTemplate(content, lang) {
        return `<pre v-pre="" ${lang ? `data-lang="${lang}` : '' }"><code ${lang ? `class="lang-${lang}` : ''}">${highlight(content, lang)}</code></pre>`;
    }

    function highlight(content, lang) {
        const language = Prism.languages[lang];

        if (language) {
            return Prism.highlight(content, language);
        }

        return content;
    }

    return {
        renderCode(content, lang = '') {
            if (content.indexOf('-+-') > -1) {
                const langs = lang.split('|');
                const blocks = content.split('-+-').map((block, i) => {

                    return buildTemplate(block.trim(), langs[i]);
                });

                return `<div class="code-split">${blocks.join('')}</div>`;
            } else {
                // If for some reason there are piped languages without a code
                // split signal, use the first language
                if (lang.indexOf('|') > -1) {
                    lang = lang.split('|')[0];
                }
            }

            return buildTemplate(content, lang);
        }
    }
})();
