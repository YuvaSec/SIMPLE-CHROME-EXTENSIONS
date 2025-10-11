1. Here I have learnt:
   1. The difference between local and sync storage
   2. How to save form input persistently
   3. How to load data when popup opens
   4. await chrome.storage.sync.set({ key: value }) → saves
   5. chrome.storage.sync.get("key", callback) → reads
2. Drawbacks:
   1. chrome.storage.sync → syncs across Chrome profile if logged in
   2. chrome.storage.local → stays only on this computer
