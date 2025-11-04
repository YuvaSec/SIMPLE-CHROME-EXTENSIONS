
document.getElementById("hello").textContent = chrome.i18n.getMessage("helloText");
document.getElementById("bye").textContent   = chrome.i18n.getMessage("goodbyeText");

// Show which locale the browser is using
document.getElementById("output").textContent = "Locale: " + chrome.i18n.getUILanguage();
