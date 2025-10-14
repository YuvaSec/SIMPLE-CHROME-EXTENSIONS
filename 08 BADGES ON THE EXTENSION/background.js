//3. Update the badge to show how many tabs are in a given window.
async function updateBadge(windowId){
    if(windowId === chrome.windows.WINDOW_ID_NONE) return;
    try{
        //4. This will get all the tabs opened in the current window.
        const tabs = await chrome.tabs.query({windowId});
        const count = tabs.length

        //5. This will apply style to the badge

        await chrome.action.setBadgeBackgroundColor({ color: "yellow" });
        await chrome.action.setBadgeText({ text: String(count) });

        // simple UX: tooltip shows the number too.
        await chrome.action.setTitle({ title: `Tabs in this window: ${count}` });

    }catch (e){
        console.warn("Error updating badge: ", e, "")
    }
}



//2. Set badge for the active (focused) window
async function updateBadgeForActiveWindow(){
    const win = await chrome.windows.getCurrent({ populate: false}).catch(()=>null);
    if(win?.id) updateBadge(win.id);
}


// 1. Initial set on install/reload.
chrome.runtime.onInstalled.addListener(()=>{
    updateBadgeForActiveWindow();
})



// Keep the badge fresh on common tab/window events
chrome.windows.onFocusChanged.addListener(windowId => updateBadge(windowId));
chrome.tabs.onCreated.addListener(tab => updateBadge(tab.windowId));
chrome.tabs.onRemoved.addListener((tabId, removeInfo) => updateBadge(removeInfo.windowId));
chrome.tabs.onAttached.addListener((tabId, attachInfo) => updateBadge(attachInfo.newWindowId));
chrome.tabs.onDetached.addListener((tabId, detachInfo) => updateBadge(detachInfo.oldWindowId));

