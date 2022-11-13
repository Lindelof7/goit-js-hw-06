const inputEl = document.querySelector("#font-size-control")
const textEl = document.querySelector("#text")

// const fontSizeEl = textEl.style.fontSize
let inputValue = inputEl.value

inputEl.addEventListener("input", () => {
    textEl.style.fontSize = inputValue + "px";
})







// console.log(textEl.style.fontSize) 