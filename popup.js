document.getElementById('button').onclick = myscript();

function myscript(){


chrome.storage.sync.get(['refer','img'], function(items) {
    // message('Settings retrieved', items.refer);

    document.write("<h1>refR</h1>")
    document.write("<h2>Text to Refr</h2>");
    document.write("<font size=4>"+items.refer+"</font>");
    document.write("<br> <br>");
    document.write("<h2>Image to Refr</h2>");
    document.write("<img src="+items.img.toString()+">");
    // console.log(items.refer);

    });

}

