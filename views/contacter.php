<div class="content-container">
    <div class="container-fluid">
        <div class="container">
            <div class=".col-12 .col-sm-6 .col-xs-8">
                <div class="jumbotron">
                    <form id="contactForm" action="index.php?c=contacter&a=envoiMail" method="post">
                        <fieldset>
                            <legend class="display-5 text-center mt-4">Me contacter</legend>
                            <hr class="my-4">
                            <div class="form-group">
                                <label for="email">Adresse email</label>
                                <input name="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Entez votre email">
                            </div>
                            <div class="form-group">
                                <label for="nom">Nom</label>
                                <input name="nom" type="text" class="form-control" id="nom" aria-describedby="nom" placeholder="Entez votre nom">
                            </div>
                            <div class="form-group">
                                <label for="prenom">Prenom</label>
                                <input name="prenom" type="text" class="form-control" id="prenom" aria-describedby="prenom" placeholder="Entez votre prenom">
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea name="message" class="form-control" id="message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Envoyer</button>
                            <div id="res"></div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>