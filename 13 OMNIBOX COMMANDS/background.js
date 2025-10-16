// 1. Fires when we type after "yuva" + <tab> button for Omnibox.
chrome.omnibox.onInputChanged.addListener((text, suggest) => {
    console.log("Input changed:", text);

    //Give autocomplete suggestions
    if(text.trim()){
        suggest([
            {content: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", description: "Youtube"},
            {content: "https://www.google.com/search?q=" + text, description: "Google Search"},
        ])
    }
})

// 2. Fires when we press Enter_key on a suggestion or raw text.
chrome.omnibox.onInputEntered.addListener((text, disposition) => {
    console.log("Omnibox entered:", text);

    let url;
    if(text.startsWith("docs ")){
        const query = text.replace("docs ", "").trim();
        url = `https://developer.chrome.com/s/results?q=${encodeURIComponent(query)}`;
    } else {
        url = `https://www.google.com/search?q=${encodeURIComponent(text)}`;
    }

    // Respect how the user pressed Enter (current/new tab/window)
    switch (disposition) {
        case "currentTab":
            chrome.tabs.update({ url });
            break;
        case "newForegroundTab":
            chrome.tabs.create({ url });
            break;
        case "newBackgroundTab":
            chrome.tabs.create({ url, active: false });
            break;
    }

});