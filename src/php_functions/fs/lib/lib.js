var reqexec = new XMLHttpRequest()
var POS_local_add = document.location.origin + "/src/php_functions/fs/src/local_add.php"
var POS_local_read = document.location.origin + "/src/php_functions/fs/src/local_read.php"
var POS_local_write = document.location.origin + "/src/php_functions/fs/src/local_write.php"

function http_get(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET",url,false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function local_add(filename, content) {
    // esecuzione php usando gli argomenti/variabili filename e content
    $.ajax({
        url: POS_local_add + "?filename=" + filename + "&content=" + content,
        success: function(data) {
          $('.result').html(data);
        }
    });
}