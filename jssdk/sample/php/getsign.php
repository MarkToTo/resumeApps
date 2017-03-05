<?php
header("Access-Control-Allow-Origin: *");
require_once "jssdk.php";
$jssdk = new JSSDK("wx31a318a826cea498", "8cd070e10637b6fc7b1add50b1eabbf1");
$signPackage = $jssdk->GetSignPackage($_POST['url']);
echo json_encode($signPackage);
?>