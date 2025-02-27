
// some example code

// set some styles
setProperty("game-board", "background-color", "salmon");
setProperty("game-board", "padding", "15px");
setProperty("game-board", "border-radius", "10px");
setProperty("game-board", "box-shadow", "0 0 10px 0 rgba(0, 0, 0, 0.5)");
setProperty("game-board", "display", "flex");
setProperty("game-board", "flex-direction", "column");
setProperty("game-board", "align-items", "center");
setProperty("game-board", "justify-content", "center");

// set some text to start out with
setText("output", `I am a bot.`);

// add an event listener to the button for interaction with the user
onEvent("theButton", "click", () => {
    const name = getText("input");
    setText("output", `Hello ${name}`);
});

