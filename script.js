
function showNum(num) {
    const valueInput = document.getElementById('field').value
    document.getElementById('field').value = valueInput + num
}

function deleteValue() {
    let valueInput = document.getElementById('field').value
    let result = valueInput.substr(0, valueInput.length - 1)
    document.getElementById('field').value = result
}

function deleteFull() {
    let del = document.querySelector("#clear2").value
    let re = del.substr(0, del.length = 0)
    document.querySelector("#field").value = re
}

function calculate() {
    const valueInput = document.getElementById('field').value
    const value = document.getElementById('field')
    document.getElementById('field').value = eval(valueInput)
    value.style.animation = ""
    setTimeout(function() {value.style.animation = "anim 0.5s linear"}, 1);
}

function help() {
    document.getElementById('pag_help').style.display = "block"
}

function ocult() {
    document.getElementById('pag_help').style.display = "none"
}

let bt = document.querySelector(".bt")
bt.addEventListener("click", () => {
    if (nav.style.width === "300px") {
        fecha()
    } else {
        abre()
    }
})

let menu = document.querySelector(".menu")
function fecha() {
    nav.style.width = "0"
    modal.style.display = "none"
}

function abre() {
    nav.style.width = "300px"
    modal.style.display = "block"
}

let modal = document.querySelector(".modal")
let nav = document.querySelector(".nav")
modal.addEventListener("click", function(e) {
    if (e.target == this) fecha()
})
