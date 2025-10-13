// Trigger an alert everytime a new tab is opened
chrome.tabs.onCreated.addListener((tab) => {
    console.log("🆕 A new tab was opened:", tab.url || "no URL yet" );
    if(!tab.url) {
        //This will print if the update is received the url.
        chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.url) {
            console.log("🌐 Tab URL changed:", changeInfo.url);
        }
    });
    }
});
