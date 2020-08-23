const inputNome = document.getElementById("input-name");
const inputMessage = document.getElementById("input-message");
const ul = document.getElementById("messages");
const messages = [];
var idElement = 0;

const form = document.getElementById("form-newMessage");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputNome.value != null && inputNome.value != '' && inputMessage.value != null && inputMessage.value != '') {
        messages.push({idElement, name: inputNome.value, message: inputMessage.value });
        idElement++;
        refreshMessages();
       
    }


})

function clearUl(){
    let lis = document.getElementsByClassName("messagesInd");
    let x = ul.childElementCount;
    for(var i = 0; i < x; i ++){
        ul.removeChild(lis[0]);
    }   
    
}

function deleteMessage(id){

    messages.forEach(element => {
        if(element.idElement == id){
            
            messages.splice(messages.indexOf(element),1);
        }
    });
}
function refreshMessages() {
    clearUl();
    console.log(messages);
    messages.forEach(element => {
        let li = document.createElement("li");
        li.id = element.idElement;
        let div = document.createElement("div");

        
        let nameValue = document.createTextNode(element.name);
        let messageValue = document.createTextNode(element.message);


        let h2NameValue = document.createElement("h2");
        h2NameValue.appendChild(nameValue);
        let h2MessageValue = document.createElement("h2");
        h2MessageValue.appendChild(messageValue);

        let del = document.createElement("button");
        let deletTxt = document.createTextNode("Delete");
        del.appendChild(deletTxt);
        del.addEventListener("click", ()=>{
           let li = del.parentElement.parentElement;
           deleteMessage(li.id);
           refreshMessages();
        })


        div.appendChild(nameValue);
        div.appendChild(messageValue);
        div.appendChild(del);

        li.appendChild(div);
        li.classList.add("messagesInd");
        ul.appendChild(li);
    });

}   