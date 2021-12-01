var reqexec = new XMLHttpRequest()
var POS_local_add = location.origin + "/src/php_functions/fs/src/local_add.php"
var POS_local_read = location.origin + "/src/php_functions/fs/src/local_read.php"
var POS_local_write = location.origin + "/src/php_functions/fs/src/local_write.php"

var data_get = undefined;

function http_get(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET",url,false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function local_add(filename, content, fnc) {
    // esecuzione php usando gli argomenti/variabili filename e content
    $.ajax({
        url: POS_local_add + "?filename=" + filename + "&content=" + content,
        success: function(data) {
            fnc(data)
        }
    });
}

function local_read(filename, fnc) {
    // esecuzione php usando gli argomenti/variabili filename e content
    $.ajax({
        url: POS_local_read + "?filename=" + filename,
        success: function(data) {
            fnc(data)
        }
    });
}

function local_write(filename, content, fnc) {
    // esecuzione php usando gli argomenti/variabili filename e content
    $.ajax({
        url: POS_local_write + "?filename=" + filename + "&content=" + content,
        success: function(data) {
            fnc(data)
        }
    });
}