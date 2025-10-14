 // 1. Establish Target Sites
 const TARGETS = [
     // {type: "hostname", value: "youtube.com"},
     {type: "path", hostname: "youtube.com", value: "/watch"}
 ];

//4. Check if Current tab URL matches with TARGET URL.
 function isTargetUrl(urlString){
     try{
         const url = new URL(urlString);
         return TARGETS.some(target => {
             if(target.type === "hostname"){
                 return url.hostname === target.value || url.hostname.endsWith("." + target.value);
             }
             if(target.type === "path"){
                 return(
                     (url.hostname === target.hostname || url.hostname.endsWith("." + target.hostname))
                     && url.pathname.startsWith(target.value)
                 )
             }
         });
     }
     catch{
         return false;
     }
 }


//3. Apply UI for a specific TARGET url.
async function applyPerTabUI(tabId, url){
   // Check if the url matches the TARGET.
    const on  = isTargetUrl(url);

    if(on){
        await chrome.action.enable(tabId);
        await chrome.action.setBadgeText({text: "ON", tabId});
        await chrome.action.setBadgeBackgroundColor({color: "green", tabId});
        await chrome.action.setTitle({title: "Enabled on Youtube", tabId});
    }
    else{
        await chrome.action.disable(tabId);
        await chrome.action.setBadgeText({text: "", tabId});
        await chrome.action.setTitle({title: "Disabled on Youtube", tabId});
    }
}



// 2. On install, update the current active tab once.
 chrome.runtime.onInstalled.addListener(async () => {
     const [activeTab] = await chrome.tabs.query({
         active: true,
         currentWindow: true,
     });
     if(activeTab?.id && activeTab.url){
         applyPerTabUI(activeTab.id, activeTab.url);
     }
 })

 // 5. When the active tab changes.
 chrome.tabs.onActivated.addListener(async ({tabId})=>{
     const tab = await chrome.tabs.get(tabId).catch(()=>null);
     if(tab?.id && tab.url){
         applyPerTabUI(tab.id, tab.url);
     }
 })

 //6. When a tab's URL updates.
 chrome.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
     if(changeInfo.url){
         applyPerTabUI(tabId, changeInfo.url);
     }
 })

