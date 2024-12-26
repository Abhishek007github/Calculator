const btn = document.querySelectorAll("button");
const inputDisplay = document.querySelector("#input");

let string = "";
Array.from(btn).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "DEL") {
            string = string.substring(0, string.length - 1);
            inputDisplay.value = string;
        } else if (e.target.innerHTML === "AC") {
            string = "";
            inputDisplay.value = string;

        } else if (e.target.innerHTML === "=") {
            equal = eval(string);
            inputDisplay.value = equal;
        } else {
            string += e.target.innerHTML;
            inputDisplay.value = string;

        }
    })
})