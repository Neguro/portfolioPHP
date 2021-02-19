'use strict';

$("#contactForm").submit(function (event) {
    event.preventDefault(); // annule l'action par défaut (on ne veut pas que la page se recharge)
    var form_url = $(this).attr("action"); // récupére l'URL du formulaire
    var form_method = $(this).attr("method"); //récupére la méthode GET/POST du formulaire
    var form_data = $(this).serialize(); // encode les éléments du formulaire pour la soumission
    var elem = document.getElementById("res");

    // requete d'envoi mail en ajax
    $.ajax({
        url: form_url,
        method: form_method,
        data: form_data,
        async: false,
        statusCode: {
            200: function () {
                elem.classList.add('alert alert-success');
                elem.textContent = "Le mail a bien été envoyer !";
            },
            404: function () {
                elem.classList.add('alert alert-danger');
                elem.textContent = "Il semblerait qu'il y ai un souci avec l'envoi de mail !";
            },
        }
    });
});


