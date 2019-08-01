chrome.runtime.onMessage.addListener(function(msg, sender){

    if(msg.toggle){
        toggle();
    }
})

var iframe = document.createElement('iframe'); 
iframe.style.background = "#d1d3d6";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.frameBorder = "none"; 
iframe.src = chrome.extension.getURL("popup.html")

document.body.appendChild(iframe);

function toggle(){
    if(iframe.style.width == "0px"){
        iframe.style.width="400px";
        iframe.src = chrome.extension.getURL("popup.html")
    }
    else{
        iframe.style.width="0px";
        iframe.src = chrome.extension.getURL("popup.html")

    }
}