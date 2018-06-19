document.addEventListener('DOMContentLoaded', function() {
    var scriptElement = document.createElement('script');
    scriptElement.src = safari.extension.baseURI + 'injected.js';
    document.body.appendChild(scriptElement);     
});