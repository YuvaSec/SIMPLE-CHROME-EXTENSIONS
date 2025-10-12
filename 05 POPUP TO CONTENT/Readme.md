Here I learnt how the popup button sends a message to the content script,
                    and the content script reacts inside the webpage.

1. learnt:
   1. How to use chrome. tabs and chrome.runtime.sendMessage 
   2. How to receive messages in content scripts 
   3. How popup and page can communicate safely

2. Understanding:
   1. popup.js can’t directly touch the page, but it can message a content script that can. 
   2. chrome.tabs.sendMessage(tab.id, { ... }) → sends data to the page 
   3. chrome.runtime.onMessage.addListener(...) → waits for it on the page side