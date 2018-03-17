function listenForClicks() {
    function reportError(error) {
        console.error(`Couldn't run the extension: ${error}`)
    }

    function reset(tabs) {
        browser.tabs.executeScript()
    }
    
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('none')) {
            browser.tabs.query({active: true, currentWindow: true})
                .then(reset)
                .catch(reportError);
            // refresh the page.
            alert("none");
            
        }
        else if (e.target.classList.contains('lineant')) {
            // The styles for hyperlinks is gone and pointer is default,
            // but the user can still click on it (if found)
            browser.tabs.query({active: true, currentWindow: true})
                .then(lineant)
                .catch(reportError);
            alert("Lineant mode");
        }
        else if (e.target.classList.contains('strict')) {
            // The anchors are changed to span, you can't do anything about it
            // except reading the page.
            browser.tabs.query({active: true, currentWindow: true})
                .then(strict)
                .catch(reportError);
            alert("strict mode");
        }
    })
}

function reportExecuteScriptError(error) {
   console.error(`Failed to run Unshallow script: ${error.message}`);
}

browser.tabs.executeScript({file: "/content_scripts/unshallow.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);
