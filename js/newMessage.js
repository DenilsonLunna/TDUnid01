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
        let span = document.createElement("span");
        span.style.color='black'

        
        let nameValue = document.createTextNode(element.name+": "+element.message);

         /**
         * button
         */
        let button = document.createElement("button");
        
        /**
         * Imagem
         */
        let image = document.createElement("img")
        image.src = 'https://image.flaticon.com/icons/png/512/126/126468.png'
        image.alt = 'deletar'
        image.style.width = '20px'
        image.style.height = '20px'
       

        button.className = "button"
        button.style.width = "20px";
        button.style.height = "20px";
      
        button.style.marginLeft = "20px";
        button.appendChild(document.createTextNode(""));
        button.appendChild(image);

        button.style.color = "#040404";
        button.style.backgroundColor = "transparent";
    
        button.onclick = ()=>{
           let li = button.parentElement;
           deleteMessage(li.id);
           refreshMessages();
        }
        span.appendChild(nameValue);

        li.appendChild(span);
        li.appendChild(button);
        li.classList.add("messagesInd");
        ul.appendChild(li);
    });

}   