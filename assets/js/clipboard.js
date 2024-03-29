export function copyToClipboard(elementId) {
    var element = document.getElementById(elementId);
    var text = element.getAttribute('data-clipboard-text');
    navigator.clipboard.writeText(text).then(function () {
        console.log('Texte copié avec succès: ' + text);
    })
        .catch(function (error) {
            console.error('Erreur lors de la copie:', error);
        });
}

window.copyToClipboard = copyToClipboard;
