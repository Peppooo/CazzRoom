var chat_archv_lst = "archv/chat-archv.lst"

if(localStorage.getItem("username") != undefined) {
    console.log("logged")
}
else
{
    console.log("not logged")
    location.href = "index.html"
}

update_chat()

function update_chat() {
    local_read("archv/chat-archv.lst" ,function(data) {
        document.getElementById("chat").innerHTML = data;
    })
}

function send_message(content) {
    if(event.key === 'Enter') {
        local_add(chat_archv_lst, "%0a" + localStorage.getItem("username") + ": " + content.value, function(data) {

        })
        document.getElementById("sendmessageID").value = ""
        update_chat()
    }
}

function logout() {
    localStorage.removeItem("username")
    location.href = "index.html"
}