<?php

include_once 'views/contacter.php';

if (isset($_POST) && !empty($_POST['email']) && !empty($_POST['nom']) && !empty($_POST['prenom']) && !empty($_POST['message'])) 
{
    $to = "nassim.ahmedali@gmail.com";
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $message = $_POST['message'];
    $header = 'De ' . $nom . ' ' . $prenom . ' ' . ' : ' . $_POST['email'];

    $result = mail($to, $header, $message);
}
