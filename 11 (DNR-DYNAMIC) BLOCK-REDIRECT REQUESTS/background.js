//Give a random unique RuleId for dynamic rules
let RULE_ID = 10001;  //above 10,000 is a common practice to have no collisions

//AGAIN RE-ASSIGN THE TOGGLE_KEY
const TOGGLE_KEY = "toggleState";



async function applyRulesFromState() {
    const { [TOGGLE_KEY]: state} = await chrome.storage.local.get(TOGGLE_KEY);
    // console.log("state is", state);

    // Remove existing Rule id//
    await chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [RULE_ID],
        addRules: state ? [{
            id: RULE_ID,
            priority: 1,
            action: { type: "block" },
            condition: {
                urlFilter: "https://www.tiktok.com/",
                resourceTypes: ["main_frame"]
            }
        }] : []
    });
}

//
chrome.runtime.onInstalled.addListener(applyRulesFromState);
chrome.runtime.onMessage.addListener((msg)=>{
    if(msg?.type === "applyRules") {
        applyRulesFromState();
    }
});

