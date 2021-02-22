'use strict';

$("#contactForm").submit(function (event) {
    event.preventDefault(); // annule l'action par défaut (on ne veut pas que la page se recharge)
    var form_url = "contacter.php"; // récupére l'URL du formulaire
    var form_method = "POST" //récupére la méthode GET/POST du formulaire
    var form_data = $(this).serialize(); // encode les éléments du formulaire pour la soumission

    // requete d'envoi mail en ajax
    $.ajax({
        url: form_url,
        method: form_method,
        data: form_data,
        success: function () {
                $("#res").addClass('alert alert-success').html("Le mail a bien été envoyer !");
                $("#contactForm").trigger("reset");
        },
        error: function () {
                $("#res").addClass('alert alert-danger').html("Il semblerait qu'il y ai un souci avec l'envoi de mail !");
                $("#contactForm").trigger("reset");
        }
    })
});


