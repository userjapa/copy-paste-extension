let info = {}
let copy = false
let url = ''
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!message.type) info.error = 'Message is Required!'
  if (message.type === 'COPY') {
    info = message
    info.tab = sender.tab
    copy = true
  }

  if (message.type === 'PASTE') {
    if (copy) {
      copy = false
    } else {
      info.error = 'Info must be copied first!'
    }
  }
  sendResponse(info)
})

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.tabs.getSelected(null, function(tab) {
    if (url !== tab.url) {
      url = tab.url
      if (url.indexOf('chrome://') === -1) {
        if (url.indexOf('g1.globo') > -1 && url.indexOf('noticia') > -1) {
          chrome.tabs.executeScript(null, {file: "contentscript-copy.js"})
          chrome.browserAction.setIcon({path: 'green.png'})
        }
        if (url.indexOf('youtube') > -1 && url.indexOf('results') === -1) {
          chrome.tabs.executeScript(null, {file: "contentscript-paste.js"})
          chrome.browserAction.setIcon({path: 'red.png'})
        }
      }
    }
  })
})

chrome.tabs.onActivated.addListener(function (activeInfo) {
  chrome.tabs.getSelected(null,function(tab) {
      url = tab.url;
      if (url.indexOf('chrome://') === -1) {
        if (url.indexOf('g1.globo') > -1 && url.indexOf('noticia') > -1) {
          chrome.tabs.executeScript(null, {file: "contentscript-copy.js"})
          chrome.browserAction.setIcon({path: 'green.png'})
        }
        if (url.indexOf('youtube') > -1 && url.indexOf('results') === -1) {
          chrome.tabs.executeScript(null, {file: "contentscript-paste.js"})
          chrome.browserAction.setIcon({path: 'red.png'})
        }
      }
   });
})
