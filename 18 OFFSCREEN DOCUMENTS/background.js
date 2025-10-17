// Utility to ensure the offscreen document exists
async function ensureOffscreen() {
    const offscreenUrl = chrome.runtime.getURL("offscreen.html");
    const docs = await chrome.offscreen.hasDocument();
    if (!docs) {
        await chrome.offscreen.createDocument({
            url: offscreenUrl,
            reasons: ["CLIPBOARD"],
            justification: "Copying text to clipboard"
        });
    }
}

// Listen for copy requests from popup
chrome.runtime.onMessage.addListener(async (msg) => {
    if (msg.type === "copy-text") {
        await ensureOffscreen();
        chrome.runtime.sendMessage({ type: "do-copy", text: msg.text });
    }
});
