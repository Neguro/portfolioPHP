<?php
$c = filter_input(INPUT_GET, 'c', FILTER_SANITIZE_STRING);

if (empty($c)) 
{
    $c = 'accueil';
}

require "views/header.php";
require "views/sidebar.php";

switch ($c) 
{
    case 'accueil':
        include 'controllers/acceuil.php';
        break;
    case 'competences':
        include 'controllers/competences.php';
        break;
    case 'projets':
        include 'controllers/projets.php';
        break;
    case 'passions':
        include 'controllers/passions.php';
        break; 
    case 'veille':   
        include 'controllers/veille.php';
        break;
    case 'contacter':
        include 'controllers/contacter.php';
        break;
}

require 'views/footer.php';
