1. Learnt:
   1.  How to register an Omnibox keyword in manifest.json
   2.  How to listen for and respond to user input
   3.  How to open tabs or show suggestions dynamically

2. Key-Takeaways:
   1. `"omnibox": { "keyword": "yuva" }` Reserves the keyword in Chrome’s address bar.
   2. `onInputChanged` Fires as the user types. we can use it to show live suggestions.
   3. `onInputEntered` Fires when Enter is pressed.
   4. `disposition`  Dictates how? Enter was pressed like (same Tab, New Tab, background). 

3. Understanding Disposition:
   1. If I just hit Enter, Chrome usually treats it as "currentTab". 
   2. If I press Alt+Enter or Cmd+Enter, 
      it may trigger "newForegroundTab" or "newBackgroundTab" depending on platform and settings.
   3. But here's the catch: 
      Chrome doesn’t always honor disposition perfectly, especially if the extension doesn’t have a popup or UI to guide the user.