// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title = document.querySelector("h2");
const superEventHandler = {
  mouseEnter: function () {
    title.innerText = "mouse is here";
    title.style.color = colors[0];
  },
  mouseLeave: function () {
    title.innerText = "mouse is gone";
    title.style.color = colors[1];
  },
  windowResize: function () {
    title.innerText = "it's changed";
    title.style.color = colors[2];
  },
  contextMenu: function () {
    title.innerText = "it's finished";
    title.style.color = colors[3];
  }
};

title.addEventListener("mouseenter", superEventHandler.mouseEnter);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.windowResize);
window.addEventListener("contextmenu", superEventHandler.contextMenu);
