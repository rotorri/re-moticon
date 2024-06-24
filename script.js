(function() {
    const repoUrl = 'https://raw.githubusercontent.com/rotorri/re-moticon/release/img';

    const replaceRules = {
        '/애환': `${repoUrl}/sad.gif`,
        '/뿎': `${repoUrl}/ang.png`,
        '/콩': `${repoUrl}/22.png`,
        '/ㅋㄲㅈㅁ': `${repoUrl}/22.png`,
        '/절': `${repoUrl}/zul.gif`,
        '/우삼': `${repoUrl}/u3.gif`,
        '/조삼': `${repoUrl}/jo3.jpg`,
        '/껌': `${repoUrl}/gum.gif`,
        '/꺄': `${repoUrl}/emb.gif`,
        '/뽀뽀': `${repoUrl}/chu.gif`,
        '/끄': `${repoUrl}/ew.png`,
        '/굿': `${repoUrl}/good.gif`,
        '/삠': `${repoUrl}/bim.png`,
        '/짞': `${repoUrl}/clap.gif`,
        '/ㅠ': `${repoUrl}/cry.gif`,
        '/춤': `${repoUrl}/dance.gif`,
        '/ㄱ-': `${repoUrl}/r-.jpg`,
        '/ㅃ': `${repoUrl}/sup.gif`,
        '/킥': `${repoUrl}/lol.jpg`,
        '/땅': `${repoUrl}/noo.gif`,
        '/도망': `${repoUrl}/run.gif`,
        '/근엄': `${repoUrl}/seri.gif`,
        '/붂': `${repoUrl}/shy.gif`,
        '/담': `${repoUrl}/smoke.gif`,
        '/피식': `${repoUrl}/psk.png`,
        '/헉': `${repoUrl}/omg.gif`,
        '/착잡': `${repoUrl}/ff.gif`,
        '/어이': `${repoUrl}/jp.gif`,
        '/뭐야': `${repoUrl}/he.gif`,
        '/하지': `${repoUrl}/yara.png`,
        '/컥': `${repoUrl}/wtf.gif`
    };

    function replaceTextWithImages(textNode, rules) {
        let text = textNode.textContent;
        let hasReplacement = false;
        for (const [phrase, imgSrc] of Object.entries(rules)) {
            const regex = new RegExp(phrase, 'g');
            if (text.match(regex)) {
                text = text.replace(regex, `<img src="${imgSrc}" class="re-moticon" style="width:auto;" alt="${phrase}">`);
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