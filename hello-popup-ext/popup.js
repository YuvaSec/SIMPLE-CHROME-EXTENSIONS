/* global chrome */

/* global chrome */

document.addEventListener("DOMContentLoaded", async () => {
    const input = document.getElementById("favColor");
    const btnSave = document.getElementById("save");
    const btnApply = document.getElementById("apply");
    const btnRandom = document.getElementById("random");

    // Guard: if popup opened in wrong context, bail early
    if (!chrome?.storage?.sync) {
        console.warn("Chrome APIs unavailable (are you opening popup.html directly?)");
        return;
    }

    if (!input || !btnSave || !btnApply || !btnRandom) {
        console.error("Popup elements not found — check your HTML IDs");
        return;
    }
});
// TS: key used in chrome.storage to store favorite color
const KEY = "favoriteColor";

// TS: utility — apply a hex color to the current page via script injection
async function applyColorToActiveTab(hex) {
    // TS: query active tab in current window
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab || !tab.id || !tab.url) return;

    // TS: only allow http(s) pages
    if (!/^https?:/i.test(tab.url)) {
        alert("This action only works on http(s) pages.");
        return;
    }

    // TS: inject a small function that sets body background and text color
    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        args: [hex],
        func: (hexColor) => {
            // TS: run in the page context
            const b = document.body;
            b.style.transition = "background-color 300ms ease";
            b.style.backgroundColor = hexColor;

            // TS: pick readable text color (very simple luminance check)
            const rgb = hexColor.replace("#", "");
            const r = parseInt(rgb.substring(0, 2), 16);
            const g = parseInt(rgb.substring(2, 4), 16);
            const b2 = parseInt(rgb.substring(4, 6), 16);
            const luminance = 0.299 * r + 0.587 * g + 0.114 * b2;
            document.body.style.color = luminance > 160 ? "#222" : "#fafafa";
        }
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    // TS: grab elements
    const input = /** @type {HTMLInputElement|null} */ (document.getElementById("favColor"));
    const btnSave = document.getElementById("save");
    const btnApply = document.getElementById("apply");
    const btnRandom = document.getElementById("random");
    if (!input || !btnSave || !btnApply || !btnRandom) return;

    // TS: load saved color (default to a soft yellow)
    try {
        const data = await chrome.storage.sync.get(KEY);
        const saved = data?.[KEY];
        if (typeof saved === "string") {
            input.value = saved;
        } else {
            input.value = "#ffe9a8";
        }
    } catch {
        input.value = "#ffe9a8";
    }

    // TS: save button — persist to chrome.storage.sync
    btnSave.addEventListener("click", async () => {
        const hex = input.value;
        await chrome.storage.sync.set({ [KEY]: hex });
        // TS: tiny feedback
        btnSave.textContent = "Saved ✓";
        setTimeout(() => (btnSave.textContent = "Save"), 900);
    });

    // TS: apply button — inject into current page
    btnApply.addEventListener("click", async () => {
        const hex = input.value;
        await applyColorToActiveTab(hex);
    });

    // TS: random button — pick a soft random color and preview it (not auto-saved)
    btnRandom.addEventListener("click", async () => {
        // TS: soft random in HSL → convert quickly to hex
        const h = Math.floor(Math.random() * 360);
        const s = 70; // %
        const l = 80; // %
        const hex = hslToHex(h, s, l);
        input.value = hex;
        await applyColorToActiveTab(hex);
    });
});

// TS: small HSL→HEX converter for nicer randoms
function hslToHex(h, s, l) {
    s /= 100; l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const toHex = x => Math.round(255 * x).toString(16).padStart(2, "0");
    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}



