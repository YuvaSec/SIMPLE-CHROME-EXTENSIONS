/* global chrome */

//Once the DOM is ready, get the button Element.
document.getElementById("change-color").addEventListener("click", async function() {
    //Now will query the current active tab in the current window
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    //Check for no active tab.
    if (!tab?.id) return;

    try{
        //now inject a function into the page to change the background.
        await chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: () => {

                //generate hue.
                const hue = Math.random() * 360;
                const color = `hsl(${hue}, 100%, 50%)`;

                //apply to the body background.
                const bdy = document.body;
                bdy.style.transition = "background-color 300ms ease ";
                bdy.style.backgroundColor = color;

                //readable text color for light colors;
                bdy.style.color = (hue < 180) ? "black" : "white";
            }
        });
    }catch (err) {
        console.error("Injection failed:", err);
    }
});