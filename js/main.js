(function() {
    'use strict';

    var globalPerspectiveBox = document.querySelector('.global-perspective'),
        winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    function setPerspective() {
        var clientRect = globalPerspectiveBox.getBoundingClientRect(),
            yPerspective = 100 * (winHeight / 2  - clientRect.top) / clientRect.height;

        globalPerspectiveBox.style.perspectiveOrigin = '50% ' + yPerspective + '%';
    }

    function resizeHandler() {
        winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        setPerspective();
    }

    function loadHandler() {
        resizeHandler();
    }

    window.addEventListener('scroll', setPerspective);
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('load',   loadHandler);
}());