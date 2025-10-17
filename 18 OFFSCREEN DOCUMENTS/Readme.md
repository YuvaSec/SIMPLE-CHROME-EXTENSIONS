1. Learnt:
   1. What an offscreen document is 
   2. How to create and communicate with it 
   3. A simple use case: 
      copy text to the clipboard in MV3 (which normally fails in a service worker)

2. Key-Takeaways:
   1. `Offscreen document` :A hidden HTML page with a DOM, 
       used when the background script can’t directly access features like canvas, audio, or clipboard.
   2. `chrome.offscreen.createDocument()`: Creates the hidden page if not already active.
   3. `Messaging` :The background and offscreen doc talk using chrome.runtime.sendMessage.
   4. `Reason + justification`: Required for Chrome to allow the behavior (for transparency).

3. Troubleshoot
   1. Clipboard API requires a user gesture navigator.
   2. `clipboard.writeText()` only works in response to a direct user action (like a click). 
   3. If you're calling it from a background script or without a gesture, it will fail.

4. Clipboard access only works in secure contexts—HTTPS pages 
                           or 
    extension contexts like popups and content scripts.