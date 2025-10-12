const highLightBtn = document.getElementById("highlightBtn");

//Event listener
highLightBtn.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    if(!tab.id || !tab.url || !/^https?:/i.test(tab.url || "")){
        alert("No tab found");
        return;
    }

    try{
        await chrome.tabs.sendMessage(tab.id, {action: "highlight"});
        alert("Highlighted {p} tags in this page with tab.id: " + tab.id);
    }catch (e) {
        alert(e);
    }

})