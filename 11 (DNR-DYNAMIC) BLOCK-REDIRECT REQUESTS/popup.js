//Here we will assign a key: value pair.
const TOGGLE_KEY = "toggleState";

//Let's get the Dom element toggle.
const checkbox = document.getElementById("toggle");


//1. Let's check the local storage for checkbox state using TOGGLE_KEY OBJECT
chrome.storage.local.get(TOGGLE_KEY, ({[TOGGLE_KEY]: state}) => {
    checkbox.checked = !!state;
})
                                        // OR
//todo:It can be written like this!
// chrome.storage.local.get(TOGGLE_KEY, (result) => {
//     checkbox.checked = result[TOGGLE_KEY];
// })

//2. Let's Listen to the DOM ELEMENT "checkbox".
checkbox.addEventListener("change", async () => {

    //Let's create a variable the stores locally checkbox status.
    const state = checkbox.checked;
    await chrome.storage.local.set({[TOGGLE_KEY]: state});
    // alert(TOGGLE_KEY + " set to " + state) //Just to check if the toggle works.

    //Send a Message to the service worker to run the rule in the background.
    chrome.runtime.sendMessage({type: "applyRules"});
});


