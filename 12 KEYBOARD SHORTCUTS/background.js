//Listen to the keyboard Shortcuts
chrome.commands.onCommand.addListener(async (command) => {
    console.log("Shortcut Pressed:",command);

    if(command === "toggle-highlight"){
        const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
        if(!tab.id || !tab.url || !/^https?:/i.test(tab.url || "")){
            console.log("No tab found");
            return;
        }

        //Inject a small script to toggle yellow background
        await chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: () => {
                const pTags = document.querySelectorAll("p");
                pTags.forEach(p => {
                    p.style.backgroundColor = "GREEN";
                    p.style.color = "black";
                });
            }
        })
    }

    if (command === "block all images on the active tab") {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (!tab?.id) return;

        // Inject code to hide all images on the page
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                document.querySelectorAll("img").forEach(img => {
                    img.style.display = "none";
                });
            },
        });
    }


    if(command === "open-popup"){
        // Open the extension’s popup programmatically (on Edge/Chrome not all allow this directly)
        console.log("Pretend opening popup...");
    }
})