const inputNome = document.getElementById("input-name");
const inputMessage = document.getElementById("input-message");
const ul = document.getElementById("messages");
const messages = [];


const form = document.getElementById("form-newMessage");
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(inputNome.value != null && inputNome.value != '' && inputMessage.value != null && inputMessage.value != ''){
        messages.push({name: inputNome.value, message: inputMessage.value});
        generateMessage()
    }

    
})


function generateMessage(){
    var li = document.createElement("li");
    let div = document.createElement("div");


    let nameValue = document.createTextNode(inputNome.value);
    let messageValue = document.createTextNode(inputMessage.value);

    
    let h2NameValue = document.createElement("h2");
    h2NameValue.appendChild(nameValue);
    let h2MessageValue = document.createElement("h2");
    h2MessageValue.appendChild(messageValue);



    div.appendChild(nameValue);
    div.appendChild(messageValue);

    li.appendChild(div);

    ul.appendChild(li);
}   