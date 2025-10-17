const log = document.getElementById('log');
const img = document.getElementById('img');
const txt = document.getElementById('txt');

function write(msg){
    log.textContent += msg + "\n";
}

//1. Download remote image
img.addEventListener('click', () => {
    chrome.downloads.download({
        url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        filename: "google.png"
        },
        (id) => write("Started image download, ID " + id)
    );
});

//2. Download Text blob (data URL)
txt.addEventListener('click',()=>{
    const text = "Hello from your Chrome extension!\\nSaved with the Downloads API.";
    const blob = new Blob([text],{type: "text/plain"});
    const url = URL.createObjectURL(blob);

    chrome.downloads.download({
            url,
            filename: "text.txt",
            saveAs: true
        },
        (id) => write("Started text Download with ID: " + id )
    );
});