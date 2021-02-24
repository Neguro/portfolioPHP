$(document).ready(function () {
    $('form').submit(function (event) {
        
        var form_url = $(this).attr("action"); // récupére l'URL du formulaire
        var form_method = $(this).attr("method"); //récupére la méthode du formulaire
        var form_data = $(this).serialize(); // encode les éléments du formulaire pour la soumission
        $.ajax({
            url: form_url,
            method: form_method,
            data: form_data,
            dataType: 'json',
            success: function (data) {
                console.log(data);
                $('#res').addClass('alert alert-success').html("Le mail a bien été envoyer !");
                $('form').trigger("reset");
            },
            error: function () {
                $('#res').addClass('alert alert-danger').html("Il semblerait qu'il y ai un souci avec l'envoi de mail !");
                $('form').trigger("reset");
            }
        });
        event.preventDefault();
    })
})


