let { exec } = require('child_process');

let inputField = document.getElementById("userInput");
let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function() {
    let userInput = inputField.value;
    console.log(userInput);
    exec (userInput, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    }
});
