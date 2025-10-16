1. Learnt:
   1. How to define shortcuts in `manifest.json`
   2. How to listen for them in the background 
   3. How to perform actions (like toggling or sending messages)

2.  Take-Away's:
    1. `commands` in manifest define keyboard shortcuts + descriptions.
    2. `chrome.commands.onCommand` Listens and Fires when a shortcut is pressed. 
    3. Background worker Handles it instantly without any popup.
    4. `chrome.scripting.executeScript()` Runs the logic in the active page.

3. Drawbacks
    1. Chrome may block shortcuts if they already exist.
