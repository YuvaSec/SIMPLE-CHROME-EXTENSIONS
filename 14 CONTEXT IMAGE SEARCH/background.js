// 1. Create the menu item when the extension is installed
chrome.runtime.onInstalled.addListener(()=>{

    chrome.contextMenus.create({
        id: "yuva-yandex-search",
        title: "🔍 Reverse (Yandex Search)",
        contexts: ["image"] //This will only appear when I Right click on an image
    });
    chrome.contextMenus.create({
        id: "yuva-pimeyes-search",
        title: "🔍 Reverse (PimEyes Search)",
        contexts: ["image"]
    });
    chrome.contextMenus.create({
        id: "yuva-google-search",
        title: "🔍 Reverse (Google Search)",
        contexts: ["image"] // only show on right-clicking an image
    });
});

//2. Now Listen to click on the contextMenu created above.
chrome.contextMenus.onClicked.addListener((info)=>{
   if(info.menuItemId === "yuva-yandex-search" && info.srcUrl){

       //Build a Reverse image search URL
       const searchUrl = "https://yandex.com/images/search?rpt=imageview&url=" + encodeURIComponent(info.srcUrl);

       // Open the search in a new foreground tab
       chrome.tabs.create({ url: searchUrl });
   }
    if (info.menuItemId === "yuva-pimeyes-search" && info.srcUrl) {
        // Build PimEyes reverse image search URL
        const searchUrl = "https://pimeyes.com/en?url=" + encodeURIComponent(info.srcUrl);

        // Open the search in a new foreground tab
        chrome.tabs.create({ url: searchUrl });
    }
    if (info.menuItemId === "yuva-google-search" && info.srcUrl) {
        console.log("Google Search", info.srcUrl);
        // Build a Google reverse image search URL
        const searchUrl = "https://www.google.com/searchbyimage?image_url=" + encodeURIComponent(info.srcUrl);

        // Open the search in a new foreground tab
        chrome.tabs.create({ url: searchUrl });
    }
});