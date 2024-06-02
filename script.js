const keypads = document.querySelectorAll("#keypad span")
const Ptag = document.querySelector("#result")
const dustks = document.querySelectorAll("#tools button")

for (let keypad of keypads){
    keypad.addEventListener("click", () => {
        Ptag.innerText += keypad.innerText
    })
}

for (let tool of dustks){
    tool.addEventListener("click", () => {
        if (tool.innerText == "="){
            Ptag.innerText = eval(Ptag.innerText)
            return
        }
        Ptag.innerText += tool.innerText
    })
}
