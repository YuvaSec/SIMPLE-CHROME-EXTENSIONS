1. Learnt:
   1. How to create context menu items in the background script
   2. How to react when they’re clicked
   3. How to access the clicked Active-page or selected text.

2. Key Concepts.
| `chrome.contextMenus.create()`                       | Adds items to the right-click menu.                       |
| `onClicked` "event"                                  | Tells you which menu was used and what the user clicked.  |
| `chrome.scripting.executeScript()`                   | Runs code *in the current page* safely.                   |
| `contexts: ["selection"]`                            | Controls when it appears (text, image, link, page, etc.). |
| `documentUrlPatterns: ["http://*/*", "https://*/*"]` | Limit the menu to http/https so it won’t appear on chrome://, PDFs, etc.

3. Troubleshoot:
   1. Without adding `activeTab` to Permissions, chrome will reject Injection.
        This will Give {temporary access} to the current/active tab 
        when we click on context-menu item (counts as a user gesture).
   2. Adding "host_permissions": ["https://*/*", "http://*/*"], 
        This will Grant {persistent access} to matching sites.