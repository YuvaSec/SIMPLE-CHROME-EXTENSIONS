const highLight = document.getElementById( 'highlight');
const darkMode = document.getElementById('dark-mode');
const resetAll = document.getElementById('reset');
const lightMode = document.getElementById('light-mode');

async function checker(){
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    if(!tab.id || !tab.url || !/^https?:/i.test(tab.url || "")){
        console.log("No tab found");
        return null;
    }
    return tab;
}


//1. Highlight all paragraphs with a yellow background.
highLight.addEventListener('click',async () =>{
    let tab = await checker();
    if(!tab) return;
    await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            const pTags = document.querySelectorAll("p");
            pTags.forEach(p => {
                p.style.backgroundColor = "yellowgreen";
                p.style.color = "black";
            })
        }
    });
});


//2. Remove Highlight from the paragraphs
resetAll.addEventListener('click',async () =>{
    let tab = await checker();
    if(!tab) return;
    await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            document.querySelectorAll("p").forEach(p => {
                p.style.backgroundColor = "";
                p.style.color = "";
            })
        }
    });
});


// 3. Inject Dark Mode CSS
darkMode.addEventListener('click', async ()=>{
    let tab = await checker();
    if(!tab) return;

    await chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        css: `
                html, body {
                  background-color: #121212 !important;
                  color: #e0e0e0 !important;
                }
                * {
                  background-color: transparent !important;
                  color: #e0e0e0 !important;
                  border-color: #444 !important;
                }
                a, button {
                  color: #90caf9 !important;
                }
                img, video {
                  opacity: 0.8 !important;
                }
              `
    });

});

// 4. Remove Injected CSS (by reinserting defaults)
resetAll.addEventListener("click", async () => {
    let tab = await checker();
    if(!tab) return;

    await chrome.scripting.removeCSS({
        target: { tabId: tab.id },
        css: `
                html, body {
                  background-color: #121212 !important;
                  color: #e0e0e0 !important;
                }
                * {
                  background-color: transparent !important;
                  color: #e0e0e0 !important;
                  border-color: #444 !important;
                }
                a, button {
                  color: #90caf9 !important;
                }
                img, video {
                  opacity: 0.8 !important;
                }
              `
    });
});

//5. Inject LightMode CSS
lightMode.addEventListener('click', async ()=>{
    let tab = await checker();
    if(!tab) return;

    await chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        css: `
                 html, body {
                  background-color: white !important;
                  color: black !important;
                }
                a, button {
                  color: black !important;
                }
                img, video {
                  opacity: 0.8 !important;
                }
        `
    });
});

// 6. Remove LightMode CSS
resetAll.addEventListener("click", async () => {
    let tab = await checker();
    if(!tab) return;

    await chrome.scripting.removeCSS({
        target: { tabId: tab.id },
        css: `
                 html, body {
                  background-color: white !important;
                  color: black !important;
                }
                a, button {
                  color: black !important;
                }
                img, video {
                  opacity: 0.8 !important;
                }
        `
    });
});