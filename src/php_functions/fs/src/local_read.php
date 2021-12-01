<?php
    $target = fread($_GET['filename'], "r");
    echo $target
    fclose($target)
?>