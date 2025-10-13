1. Learning:
   1. What background service workers do
   2. The difference between persistent and event-driven background scripts 
   3. (MV3 = event-driven)
   4. How to use the chrome.tabs API from a background worker

2. Key concepts:
    1. Service worker	
        A script that stays idle until an event wakes it (like onInstalled, onMessage, onCreated, onUpdated etc.). 
        It has no DOM.
    2. Event-driven
        It “wakes up” for an event, runs, then goes back to sleep to save memory.
    3. Persistent state
        If I want it to remember things, i must use chrome.storage or messaging. 
    4. Debugging
        when the onCreated dosent work just add a conditional statement with onUpdate.


The background worker handles logic that should work silently Like:
            (alarms, notifications, tab events, network rules, etc.).