1. Learnt:
   1. How to Add a context menu `contexts: ["image"]`
   2. Reading info.srcUrl from the clicked image
   3. Opening a new tab using chrome.tabs.create()

2. Key_Takeaways:
   1. `contexts: ["image"]` : Restricts your menu to right-clicks on images only.
   2. `info.srcUrl` : Holds the actual image URL that was clicked.
   3. `chrome.tabs.create({ url })` : Opens a new tab programmatically.
   4. `encodeURIComponent()` : Safely encodes the image URL for query parameters.