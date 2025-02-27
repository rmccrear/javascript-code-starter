
function onEvent(elementId, event, callback) {
    const element = document.getElementById(elementId);
    element.addEventListener(event, callback);
}

function setText(elementId, text) {
    const element = document.getElementById(elementId);
    element.textContent = text;
}


function getText(elementId) {
    const element = document.getElementById(elementId);
    if(element.tagName === "INPUT") {
        return element.value;
    } else {
        return element.textContent;
    }
}

function getNumber(elementId) {
    const element = document.getElementById(elementId);
    return parseInt(element.textContent);
}

function playSound(url, loop = false) {
    const audio = new Audio(url);
    audio.loop = loop;
    audio.play();
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// set css property
function setProperty(elementId, property, value) {
    const element = document.getElementById(elementId);
    element.style[property] = value;
}




