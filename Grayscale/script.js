function loadStylesheet() {
    var link = document.createElement("link");

    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = chrome.extension.getURL("style.css");

    document.head.appendChild(link);
}
