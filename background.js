chrome.contextMenus.create({
    "title": "refR this!",
    "contexts": ["page", "selection", "image", "link"],
    "onclick" : clickHandler
  });
  
  chrome.browserAction.onClicked.addListener(function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,"toggle");
    })
});

function clickHandler(e) {
    
    if(e.mediaType === "image")
        {
            chrome.storage.sync.set({'img': e.srcUrl}, function() {
            });

            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id,"toggle");
            });


        
        }

    if(e.selectionText)
    {
        chrome.storage.sync.set({'refer': e.selectionText}, function() {
        });

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,"toggle");
        });
    }


}