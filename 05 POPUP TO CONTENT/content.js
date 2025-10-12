// Listen for messages from the popup along with sender "like tabid framed url e.t.c"
// and sendResponse is used if there is an async function waiting for response.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    //Affect the tab.
    if (message.action === "highlight") {
        // Highlight all <p> elements on the page
        document.querySelectorAll("p").forEach(p => {
            p.style.backgroundColor = "yellowgreen";
            p.style.color = "black";
        });
    }
})


