'use strict';

$("#contactForm").submit(function (event) {
    // Annule l'action par défaut (on ne veut pas que la page se recharge)
    event.preventDefault();
    var form_url = $(this).attr("action"); //récupérer l'URL du formulaire
    var form_method = $(this).attr("method"); //récupérer la méthode GET/POST du formulaire
    var form_data = $(this).serialize(); //Encoder les éléments du formulaire pour la soumission

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


