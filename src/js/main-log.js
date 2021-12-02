var chat_archv_lst = "archv/chat-archv.lst"

if(localStorage.getItem("username") != undefined) {
    console.log("logged")
    location.href = "chat.html"
}
else
{
    console.log("not logged")
}

function log(content) {
    if(event.key === 'Enter') {
        console.log(content)
        localStorage.setItem("username", content.value)
        document.getElementById("logID").value = ""
        local_add(chat_archv_lst, "%0a" + localStorage.getItem("username") + " Joined the chat", function(data) {

        })
        location.href = "chat.html"
    }
}