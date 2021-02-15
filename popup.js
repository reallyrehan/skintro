function injectTheScript() {
 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // Injects JavaScript code into a page
        chrome.tabs.executeScript(tabs[0].id, {file: "utilities.js"});
    });
}
// adding listener to your button in popup window
// document.getElementById('press').addEventListener('click', injectTheScript);
injectTheScript();