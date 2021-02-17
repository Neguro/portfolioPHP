'use strict';

$("#contactForm").submit(function (event) {
    event.preventDefault(); // annule l'action par défaut (on ne veut pas que la page se recharge)
    var form_url = $(this).attr("action"); // récupére l'URL du formulaire
    var form_method = $(this).attr("method"); //récupére la méthode GET/POST du formulaire
    var form_data = $(this).serialize(); // encode les éléments du formulaire pour la soumission

    // requete d'envoi mail en ajax
    $.ajax({
        url: form_url,
        method: form_method,
        data: form_data,
        statusCode: {
            200: function () {$("#res").addClass("alert alert-success").html("Mail envoyer ! Penser a regarder votre boîte mail.")},
            404: function () {$("#res").addClass("alert alert-danger").html("Veuillez réessayer l'envoi de mail a échoué")} 
    }
    })
});


