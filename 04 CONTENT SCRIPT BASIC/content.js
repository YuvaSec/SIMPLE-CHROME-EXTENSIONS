// This will Run automatically on every webpage that matches the pattern provided in the manifest.json file.

//This will create a small floating message on the page.
const banner = document.createElement('div');
banner.textContent ="Hello from the chrome extension 👋";
banner.style.position = "fixed";
banner.style.top = "20px";
banner.style.right = "10px";
banner.style.backgroundColor = "blue";
banner.style.color = "white";
banner.style.padding = "8px 12px";
banner.style.borderRadius = "8px";
banner.style.fontFamily = "poppins";
banner.style.zIndex = "999";
banner.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";

document.body.appendChild(banner);


// Remove after 3 seconds.
setTimeout(() => {
    banner.remove();
},10000);