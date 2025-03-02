const ORIGIN = "https://www.linkedin.com";

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab.url) return;
  const url = new URL(tab.url);
  // Enables the side panel on ORIGIN
  if (url.origin === ORIGIN) {
    await chrome.sidePanel.setOptions({
      tabId,
      path: 'sidepanel.html',
      enabled: true
    });
  } else {
    // Disables the side panel on all other sites
    await chrome.sidePanel.setOptions({
      tabId,
      enabled: false
    });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'hello-friend') {
    sendResponse("hello-friend-message-recived");
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details.method === 'GET') {
      console.log("details object", details);
      // Get the active tab and send a message to its content script
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs.length > 0) {
          chrome.tabs.sendMessage(tabs[0].id, {
            message: "get_api_call_detected",
            url: details.url
          });
        }
      });
    }

  },
  { urls: ["https://www.linkedin.com/voyager/api/graphql*"] }, // Target API
  ["requestBody"]
);