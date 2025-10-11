1. Here I have learnt:
   1. How to inject a script into websites automatically
   2. The difference between popup scripts and content scripts
   3. How to change page content safely


2.  "content_scripts": [{
    "matches": ["https://*/*", "http://*/*"],
    "js": ["content.js"]
    }]
   1. “Hey, whenever I visit pages matching https://*/*, please inject this JS file.”


3. Popup scripts:
   1. Run only when user clicks the extension icon 
   2. Can use chrome.storage, etc. 
   3. Can’t directly touch webpage DOM


4. Content scripts:
   1. Run automatically or manually (depending on manifest or messaging)
   2. Can read/modify webpage DOM


5. Disadvantages:
   1. Can’t use all Chrome APIs directly (need background or popup bridge)