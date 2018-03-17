//function () {

window.hasRun = true;
window.strictMode = false;

function runStrictMode() {
    window.strictMode = true;
    let anchors = document.querySelectorAll("a");
    anchors.forEach(anchor =>  {
        let s = document.createElement("span");
        // TODO: Copy classes to this span.
        s.innerHTML = anchor.innerHTML;
        anchor.replaceWith(s);
    });
}

function runLineantMode() {
    resetPage();
    
}

function resetPage() {
    window.location.reload();
}

function notify(message) {
    if (message.command === "strict") {
        runStrictMode();
    }
    else if (message.command === "lineant") {
        runLineantMode();
    }
    else if (message.command === "reset") {
        resetPage();
    }
}


browser.runtime.onMessage.addListener(notify);

//}

