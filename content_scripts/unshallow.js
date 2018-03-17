//function () {

window.hasRun = true;

function runStrictMode() {
    runLineantMode();
}

function runLineantMode() {
    let anchors = document.querySelectorAll("a");
    anchors.forEach(anchor =>  {
        let s = document.createElement("span");
        // TODO: Copy classes to this span.
        // Maybe someone's using styling for that.
        s.innerHTML = anchor.innerHTML;
        anchor.replaceWith(s);
    });
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

