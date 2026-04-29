function generatePassword() {
    let length = document.getElementById("length").value;
    let useUpper = document.getElementById("uppercase").checked;
    let useNumbers = document.getElementById("numbers").checked;
    let useSymbols = document.getElementById("symbols").checked;

    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&* ";

    let chars = lower;

    if (useUpper) chars += upper;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;

    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    let passField = document.getElementById("password");
    passField.select();
    document.execCommand("copy");
    alert("Password copied!");
}
