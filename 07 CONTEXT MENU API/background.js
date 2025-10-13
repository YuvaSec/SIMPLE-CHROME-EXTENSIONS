//Create a context menu after extension installed or updated
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "Yuva-Highlight",                   //Unique id for this item
        title: "Hey shall i Highlight this text?",   //label that appears when we right-click.
        contexts: ["selection"],                // Show only when the text is selected

        //===============================================================================//
                                    //optional contexts:

        // contexts: ["page"]       // anywhere on page
        // contexts: ["link"]       // when right-clicking a link
        // contexts: ["image"]      // when right-clicking an image
        // contexts: ["editable"]   // inside input/textarea
        //===============================================================================//
    })
})

//Handle the click on the context Menu.
chrome.contextMenus.onClicked.addListener((info,tab)=>{
    if(info.menuItemId === "Yuva-Highlight" && tab?.id){
        //Inject a small script to highlight the selection.
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: () => {
                const selection = window.getSelection().toString();
                if(selection){
                   const span = document.createElement("span");
                   span.style.backgroundColor = "yellow";
                   span.style.color = "black";
                   span.textContent = selection;
                   const range = window.getSelection().getRangeAt(0);
                   range.deleteContents();
                   range.insertNode(span);
                }
                else {
                    alert("No text selected");
                }
            }
        })
    }
})


