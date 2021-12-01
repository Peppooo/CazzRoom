<?php
    $target = fopen($_GET['filename'], "r");
    if (filesize($_GET['filename']) > 0) {
        echo fread($target, filesize($_GET['filename']));
    };
    fclose($target);
?>