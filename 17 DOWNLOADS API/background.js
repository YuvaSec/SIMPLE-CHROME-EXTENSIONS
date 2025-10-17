//Log Progress and Completion
chrome.downloads.onChanged.addListener(function(delta) {
    if(delta.state?.current === "complete"){
        console.log("Download complete:", delta.id);
    }
    if(delta.error?.current){
        console.log("Download failed:", delta.id);
    }
});