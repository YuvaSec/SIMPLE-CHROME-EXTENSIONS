const output = document.getElementById('output');
const newTab = document.getElementById('new');
const closeTab = document.getElementById('close');
const reloadTab = document.getElementById('reload');
const listTabs = document.getElementById('list');


//1. Open a new tab
newTab.addEventListener('click',()=>{
    chrome.tabs.create({url: "https://www.google.com"});
})

//2. Close the active tab
closeTab.addEventListener('click',async ()=>{
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    if(tab?.id) chrome.tabs.remove(tab.id)
})

//3. Reload the active tab
reloadTab.addEventListener('click',async ()=>{
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    if(tab?.id) chrome.tabs.reload(tab.id)
})

//4. List all tabs in the current window
listTabs.addEventListener('click',async ()=>{
    const tabs = await chrome.tabs.query({currentWindow: true});
    output.textContent = tabs.map(t => `${t.index + 1}. ${t.title}`).join("\n");
});

