(function() {
    const repoUrl = 'https://raw.githubusercontent.com/rotorri/re-moticon/release/img';

    const replaceRules = {
        '/애환': `${repoUrl}/sad.gif`
    };

    function replaceTextWithImages(textNode, rules) {
        let text = textNode.textContent;
        let hasReplacement = false;
        for (const [phrase, imgSrc] of Object.entries(rules)) {
            const regex = new RegExp(phrase, 'g');
            if (text.match(regex)) {
                text = text.replace(regex, `<img src="${imgSrc}" alt="${phrase}">`);
                hasReplacement = true;
            }
        }
        if (hasReplacement) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = text;
            const fragment = document.createDocumentFragment();
            Array.from(tempDiv.childNodes).forEach(child => {
                fragment.appendChild(child);
            });
            textNode.parentNode.replaceChild(fragment, textNode);
        }
    }

    function replaceTextNodes() {
        const elements = document.querySelectorAll('body *'); // 모든 요소

        elements.forEach(element => {
            Array.from(element.childNodes).forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    replaceTextWithImages(node, replaceRules);
                }
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener("DOMContentLoaded", replaceTextNodes);
    } else {
        replaceTextNodes(); // 이미 DOMContentLoaded 이벤트가 발생한 경우
    }
})();