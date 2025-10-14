1. Learnt:
   1. Reading the active tab’s URL
   2. Matching against allowed domains/patterns
   3. Enabling/disabling Extension per tab
   4. Per-tab badge updates.
   5. Only Enabled when the path returns true.

2. Key-takeaway:
   1. No content scripts or host perms needed.
   2. Lightweight
   3. We can instantly see whether your extension “applies” on this site.
   4. Scalable: Add more targets (regex, path checks, etc.) inside isTargetUrl.
