const $ = (id) => document.getElementById(id);
const msg = $("msg");
const textArea = $("output");


//1. Open and read a local text file.  using FILE SYSTEM ACCESS API
$("open-file").addEventListener("click", async () => {
    try{
        //“Only show files that are plain text (text/plain) and end with .txt.”
        const [handle]= await window.showOpenFilePicker({
            types: [{description: "Plain Text", accept: { "text/plain": [".txt"]}}],
            excludeAcceptAllOption: true,
            multiple: false
        })
        const file = await handle.getFile();
        const text = await file.text();
        textArea.value = text;
        msg.textContent = `✅ Opened: ${file.name}`
    }catch (e){
        msg.textContent = e.name === "AbortError" ? "Cancelled." : "❌ " + e.message;
    }
});

//2. Save the textarea Content as new file.
$("save-file").addEventListener("click" , async () =>{
    try{
        if(!textArea.value) {
            msg.textContent = "❌ No text to save";
            return;
        }
        const handle = await window.showSaveFilePicker({
            suggestedName: "new-file.txt",
            types: [{description: "Plain Text", accept: { "text/plain": [".txt"]}}],
            excludeAcceptAllOption: true
        });
        const writable = await handle.createWritable();
        await writable.write(textArea.value);
        await writable.close()
        msg.textContent = "💾 File saved successfully.";
    }catch (e) {
        msg.textContent = e.name === "AbortError" ? "Cancelled." : "❌ " + e.message;
    }
})