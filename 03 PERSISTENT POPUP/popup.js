//save the input in a KEY
const KEY = "inputName"

//Declare other variables
const input = document.getElementById("input-name");
const output = document.getElementById("output");


//load stored value every time popup opens
chrome.storage.local.get(KEY, (data) => {
        if(data[KEY]){
            input.value = data[KEY];
            output.textContent = `Saved Name ${data[KEY]}`;
        }
    }
)

//save when we type and submit a name.
input.addEventListener("change", async () =>{
    const saveName = input.value.trim();
    if(!saveName) return;
    await chrome.storage.local.set({[KEY]: saveName});
    output.textContent = `Saved ✨ ${saveName} ✅ `;
})


//todo: play with the opacity when its saved!
