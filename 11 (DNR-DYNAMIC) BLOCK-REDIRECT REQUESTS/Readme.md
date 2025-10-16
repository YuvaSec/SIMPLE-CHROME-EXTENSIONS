1. Learnt:
   1. Dynamic rules 
   2. How to test and debug
   3. Service worker logs won’t show DNR activity (it’s declarative).

2. Key-Takeaways:
   1. `urlFilter` is a fast substring/wildcard matcher.
   2. `allow` rules can override broader blocks (useful for exceptions).
   3. can add more `rule_resources` files if you like (e.g., separate lists).

3. Troubleshoot:
   1. Keep rule IDs unique across static and dynamic sets.
   2. Added `host_permissions` → rules won’t apply to those hosts.
   3. `resourceTypes` → if WRONG!!! the request slips through. 
   4. Use DevTools → Network + Console warnings on the page.

