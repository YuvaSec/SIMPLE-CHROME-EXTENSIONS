// Receive message from background and actually copy to clipboard
chrome.runtime.onMessage.addListener(async (msg) => {
    if (msg.type === "do-copy") {
        console.log("Copying text to clipboard:", msg.text);
        // await navigator.clipboard.writeText(msg.text);
    }
});
