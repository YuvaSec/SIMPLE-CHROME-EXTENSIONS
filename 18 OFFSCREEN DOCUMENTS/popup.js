const inputText = document.getElementById("input-text");
const btn = document.getElementById("btn");
const msg = document.getElementById("output");

//1. Add an event listener to the button in the popup
btn.addEventListener("click", async () => {
    //2. Print below the popup Button.
    msg.textContent = "✅ Sent copy request to offscreen document...";
    setTimeout(() => {
        msg.textContent = ""
    },3000);
    //3. Grab the text form input.
    const text = inputText.value;
    //4. Send a message to background
    chrome.runtime.sendMessage({type: "copy-text", text});
})