// (Round A Number)
function round() {
    let number = document.getElementById("inputText").value;
    if (!number) {
        Toastify({
            text: "Please enter a floating point number.",
            duration: 3000,
            close: true,
            gravity: "top", // 'top' or 'bottom'
            position: "right", // 'left', 'center' or 'right'
            stopOnFocus: true, // Prevents dismissing of toast on over
            style: {
                background: "liner-gradient(to right, #00b09b, #96c93d)"
            }
        }).showToast();
        return;
    }
    let roundTheNumber = Math.round(number);
    let html = "<h1 class='text-primarytheme mb-0'>" + roundTheNumber + "</h1>"
    document.getElementById("output").innerHTML = html;
}

// (Ceil A Number)
function ceil() {
    let number = document.getElementById("inputText").value;

    if (!number) {
        alert('Please enter a floating point number.');
        return;
    }
    let ceilTheNumber = Math.ceil(number);
    let html = "<h1 class='text-primarytheme mb-0'>" + ceilTheNumber + "</h1>"
    document.getElementById("output").innerHTML = html;
}

// (Floor A Number) 
function floor() {
    let number = document.getElementById("inputText").value;
    if (!number) {
        alert('Please enter a floating point number.');
        return;
    }
    let floorTheNumber = Math.floor(number);
    let html = "<h1 class='text-primarytheme mb-0'>" + floorTheNumber + "</h1>"
    document.getElementById("output").innerHTML = html;
}

// (Generate A Random Number)
function randomNumber() {
    let randomNumber = Math.random();
    let html = "<h1 class= 'text-primarytheme mb-0'>" + randomNumber + "</h1>"
    document.getElementById("output").innerHTML = html;
}

// (Throw A Dice)
function dice() {
    let randomNumber = Math.random();
    randomNumber = (randomNumber * 6) + 1;
    let dice = Math.floor(randomNumber);
    let html = '<h1 class="text-primarytheme mb-0">' + dice + '</h1><span>Generating a random number from 1 to 6'+ "</h1>"
    document.getElementById("output").innerHTML = html;
}

// (Generate A Strong Password) Generate A Random String 
function randomString() {
    let randomString = "";
    let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "`~!@#$%^&*-_=+/?.,";
    let possibleString = upperCaseAlphabets + lowerCaseAlphabets + numbers + symbols;
    
    let limit = 16;
    for (let i = 0; i < limit; i++) {
        let randomNumber = Math.floor(Math.random() * possibleString.length);
        randomString += possibleString.charAt(randomNumber);
    }
    
    let html = '<h6 class="text-primarytheme mb-0">' + randomString + '</h6>' + '<p>Generating random string</p>';
    document.getElementById("output").innerHTML = html;
}

// (Converting String) Converting strings to integers and decimals
function convertingStrings() {

    // let num = inputValue();
    // if(!num) {
    //     tostifyError("Please enter some number");
    //     return;
    // }
    let num = "251.125486"
    console.log(num)
    console.log(typeof num)
    // num = parseInt(num)
    // num = parseFloat(num)
    num = Number(num)
    console.log(typeof num)
    num = num.toFixed(2)
    num = Number(num)
    // console.log(typeof num)
    console.log(num)
    console.log(typeof num)
}

// (Controlling Length) Controlling the length of decimals 
function controllingLength() {
    let num = "251.125";
    console.log(typeof num); // Output: string

    // Convert string to a number with fixed decimal places
    num = Number(num).toFixed(2);
    console.log(typeof num); // Output: string (toFixed() returns a string)
    console.log(num); // Output: "251.12"
}


// Calculate GST

function calculateGST() {
    let cost = document.getElementById("inputText").value;
    if (!cost) {
        alert('Please type something to calculate');
        return;
    }
    // let cost = "912";

    cost = Number(cost);
    let taxInput = +prompt("Enter your tax")

    // let tax = 17 / 100;

    let tax = cost * (17 / 100);

    let totalCost = cost + tax; 
    totalCost = Math.round(totalCost);

    document.getElementById("output").innerHTML = 'Your bill = <span class="text-primaryTheme fw-bold fw-18">' + cost + '</span>';
    document.getElementById("output").innerHTML += '<br>Tax ' + taxInput + '% = <span class="text-danger fw-bold fw-18">' + tax.toFixed(2) + '</span>';
    document.getElementById("output").innerHTML += '<br>Total amount including tax = <span class ="text-success fw-18">' + totalCost + '</span>';
}

// Clear Input Button
function clearInput() {
    let inputField = document.getElementById('inputText');
    inputField.value = '';
}

// Clear Output Button
document.getElementById("clearOutPutButton").onclick = function () {
    document.getElementById("output").innerHTML= '';
}