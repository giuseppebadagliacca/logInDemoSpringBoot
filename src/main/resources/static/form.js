

// const 
// submitDOM = document.querySelector('#submit'),
// emailInputDom = document.querySelector('#email'),
// phoneInputDom = document.querySelector('#phone'),
// h3DOM = document.querySelector('h3')


// submitDOM.addEventListener('click', checkReEx)

// function checkReEx(){
//     // console.log(typeof emailInputDom.value)
//     if(emailInputDom.value === undefined || emailInputDom.value === ''){
//         setMsg(`Incorrect email input. Please enter using the following format: example@hotmail.com`, 'red', 'lightpink')
//     }else{
//         if(validateEmail(emailInputDom.value)){
//             setMsg(`${emailInputDom.value} is an email! Feel free to check a different email!`,'green', 'lightgreen')
//         }else{
//             setMsg(`${emailInputDom.value} is not a valid email. Please enter using the following format: example@hotmail.com`, 'red', 'lightpink')
//         }
//     }
// }

// function setMsg(msg, color, bckColor){
//     submitDOM.disabled = true
//     h3DOM.innerText = `${msg}`
//     h3DOM.style.color = `${color}`
//     h3DOM.style.background = `${bckColor}`
//     h3DOM.style.padding = `5px`
//     h3DOM.style.borderRadius = `10px`
//     setTimeout(clearMsg, 4000)
// }

// function clearMsg(){
//     submitDOM.disabled = false
//     h3DOM.innerText =''
//     h3DOM.style.color = ''
//     h3DOM.style.background = ''
//     h3DOM.style.padding = ''
//     h3DOM.style.borderRadius = ''
// }

// function validateEmail(email){
//     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? true:false
//     }



let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let h3DOM = document.querySelector("h3");
let displayDivDOM = document.querySelector("#display");

displayLogIns();

function add() {
    if (emailInput.value === "" || passwordInput.value === "") {
        displayMsg("Must enter both email and password inputs!", "red", "lightpink")
    } else {
        const data = { email: `${emailInput.value}`, password: `${passwordInput.value}` };

        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(data => {
                if (data.status === 200) {
                    displayMsg("Success", 'green', "lightgreen")
                    displayLogIns();
                } else {
                    displayMsg("Error", "red", "lightpink");
                }
            });

    }
}

function displayMsg(msg, color, backgroundColor) {
    h3DOM.innerText = msg;
    h3DOM.style.color = color;
    h3DOM.style.backgroundColor = backgroundColor;
    h3DOM.style.padding = "7px";
    h3DOM.style.borderRadius = "10px";
    setTimeout(clearMsg, 5000);
}

function clearMsg() {
    h3DOM.innerText = "";
    h3DOM.style.color = "";
    h3DOM.style.backgroundColor = "";
    h3DOM.style.padding = ""
}

function displayLogIns() {
    //if data = [] display a message??
    fetch('http://localhost:8080/login')
        .then(res => res.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                const displayCard = `<div class="display-card">
                <p>id: ${data[i].id}</p>
                <p>id: ${data[i].email}</p>
                <p>id: ${data[i].password}</p>
                <div id="updateDeleteBtns">
                    <input type="button" value="Update" id="Update" onclick="Update()">
                    <input type="button" value="Delete" id="Delete" onclick="Update()">
                </div>
            </div>`
                displayDivDOM.innerHTML += displayCard;
            }
        })
        .catch((error) => console.log(error));
}

