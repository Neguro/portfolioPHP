<?php

include 'views/contacter.php';

$a = filter_input(INPUT_GET, 'a', FILTER_SANITIZE_STRING);

switch($a)
{
    case 'envoieMail':
        {
            if (isset($_POST) && !empty($_POST['email']) && !empty($_POST['nom']) && !empty($_POST['prenom']) && !empty($_POST['message']))
            {
                $to = "nassim.ahmedali@gmail.com";
                $nom = $_POST['nom'];
                $prenom = $_POST['prenom'];
                $message = $_POST['message'];
                $header = 'De ' . $nom . ' ' . $prenom . ' ' . ' : ' . $_POST['email'];
            
                mail($to,$header,$message);
            }        
        }
    break;
}