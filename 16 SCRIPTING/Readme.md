1. Learnt:
   1. `activeTab` : Lets us inject into the current tab after a user action. 
   2. `chrome.scripting.executeScript()` : Runs a function directly in the webpage context.
   3. `chrome.scripting.insertCSS()` : Dynamically add or remove styles.
   4. How to safely target the active tab : The injected function runs in the page’s DOM but isolated from your extension’s variables.

2. Troubleshoot:
   1. Have to use Broader CSS selectors `(*, html, body)` to catch more elements.
   2. Use of `!important` to override inline styles and high-specificity rules.
   3. Manifest permissions like "activeTab" or "host_permissions": ["<all_urls>"] to ensure access.
   4. Fallback logic to re-inject styles if the page changes or fails initially.