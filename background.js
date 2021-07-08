

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
                    let url = tabs[0].url;
                    // use `url` here inside the callback because it's asynchronous!
                });

    if (request.greeting === "hello")
      sendResponse({farewell: "xyz"});
  }
);