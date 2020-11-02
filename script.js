'use strict';

{
    document.getElementById('copy').addEventListener('click', () => {
        const code = document.getElementById('code').textContent;
        navigator.clipboard.writeText(code).then(() => {
            alert('コピーしました');
        })
    })
}
