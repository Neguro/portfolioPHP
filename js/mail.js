'use strict';

document.getElementById("contactForm").submit(function (event) {
    event.preventDefault(); // annule l'action par défaut (on ne veut pas que la page se recharge)
    var form_url = $(this).attr("action"); // récupére l'URL du formulaire
    var form_method = $(this).attr("method"); //récupére la méthode du formulaire
    var form_data = $(this).serialize(); // encode les éléments du formulaire pour la soumission

    // requete d'envoi mail en ajax
    $.ajax({
        url: form_url,
        method: form_method,
        data: form_data,
        success: function () {
                document.getElementById("res").addClass('alert alert-success').html("Le mail a bien été envoyer !");
                document.getElementById("contactForm").trigger("reset");
        },
        error: function () {
                document.getElementById("res").addClass('alert alert-danger').html("Il semblerait qu'il y ai un souci avec l'envoi de mail !");
                document.getElementById("contactForm").trigger("reset");
        }
    })
});


