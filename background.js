chrome.contextMenus.create({
    "title": "refR this!",
    "contexts": ["page", "selection", "image", "link"],
    "onclick" : clickHandler
  });
  
  chrome.browserAction.onClicked.addListener(function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{toggle:1});
    })
});

function clickHandler(e) {
    
    chrome.tabs.captureVisibleTab(null, {}, function (image) {
        // console.log(image); 
        chrome.storage.local.set({'img':image}, function() {});
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
        {
            chrome.tabs.sendMessage(tabs[0].id,{toggle:1});
        });

     });



}

