1. Learnt:
   1. chrome.action.setBadgeText and setBadgeBackgroundColor 
   2. Updating badges from a background service worker based on tab events 
   3. A handy UX touch with setTitle (tooltip)

2. Key Takeaways:
   1. No host permissions needed for this.
   2. watch the badge update in real time.

3. Troubleshoot:
   1. Badge text must be a string. Use "" to hide it.
   2. Use chrome.action.setBadgeText({ tabId, text: "..." }) when you want a per-tab badge. 
   3. Use chrome.action.setBadgeText({ text: "..." }) when you want a global badge (same on all tabs).