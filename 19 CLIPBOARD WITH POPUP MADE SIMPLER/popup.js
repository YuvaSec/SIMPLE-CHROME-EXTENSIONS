const $ = (id) => document.getElementById(id);
const msg = $("msg");

$("copyFixed").addEventListener("click", async () => {
  const text = $("text").value;
  try{
      await navigator.clipboard.writeText(text);
      setTimeout(() => msg.textContent = "", 1000);
      msg.textContent = "✅ Copied to clipboard!";

  }catch(e){
      msg.textContent = "❌ Copy failed:"+e.message;
  }
});

$("copySelection").addEventListener("click", async () => {
    try{
        const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
        if(!tab.id || !tab.url || !/^https?:/i.test(tab.url || "")){
            alert("No tab found");
            return;
        }
        const [{result}] = await chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: () => {
                return window.getSelection().toString().trim();
            }
        })
        if(result) {
            await navigator.clipboard.writeText(result);
            setTimeout(() =>msg.textContent = "", 1000);
            msg.textContent = "✅ Copied to clipboard!";
        }
        else {
            setTimeout(() => msg.textContent = "", 1000);
            msg.textContent ="❌ No text selected.";
        }
    }catch (e) {
        msg.textContent = "❌ Copy failed: " + e.message;
    }
})