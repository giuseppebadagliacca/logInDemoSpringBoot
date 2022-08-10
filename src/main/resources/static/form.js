let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let h3DOM = document.querySelector("h3");
let displayDivDOM = document.querySelector("#display");

function displayMsg(msg, color, backgroundColor) {
    h3DOM.innerText = msg;
    h3DOM.style.color = color;
    h3DOM.style.backgroundColor = backgroundColor;
    h3DOM.style.padding = "7px";
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
                const displayCard = `<div class="display-card" id= "${data[i].id}"
                 <p>id: ${data[i].id}</p>
                 <p>email: ${data[i].email}</p>
                 <p>password: ${data[i].password}</p>
                 <div id="updateDeleteBtns">
                     <input type="button" value="Update" id="Update" onclick="Update()">
                     <input type="button" value="Delete" id="Delete" onclick="deleteRequest(${data[i].id})">
                 </div>
             </div>`
                displayDivDOM.innerHTML += displayCard;
            }
        })
        .catch((error) => console.log(error));
}


function deleteRequest(id) {
    fetch(`http://localhost:8080/login/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const element = document.getElementById(`"${id}"`);
    element.remove();
}

function postRequest() {
    if (emailInput.value === "" || passwordInput.value === "") {
        displayMsg("Must enter both email and password inputs!", "red", "lightpink")
    } else {
        const inputData = { email: `${emailInput.value}`, password: `${passwordInput.value}` };

        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputData),
        })
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    displayMsg("Success", 'green', "lightgreen")
                } else {
                    displayMsg("Error", "red", "lightpink");
                }
            });

    }
}


