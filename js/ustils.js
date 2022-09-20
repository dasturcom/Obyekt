var $_ = function (selector, node = document) {
    return node.querySelector(selector);
}

var $$_ = function (selector, node = document) {
    return node.querySelectorAll(selector);
}

var createElement = function (tagName, classNama, text) {
    var element = document.createElement(tagName);
    element.setAttribute("class", classNama);
    if (text) {
        element.textContent = text;
    }

    return element;
} 