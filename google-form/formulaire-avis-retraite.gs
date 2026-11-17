/**
 * Crée le Google Form « Ton avis sur la retraite Retour à soi ».
 * 1. Va sur https://script.google.com > Nouveau projet
 * 2. Remplace tout le code par ce fichier, enregistre
 * 3. Clique sur « Exécuter » (fonction creerFormulaire) et autorise l'accès
 * 4. Les liens du formulaire s'affichent dans le « Journal d'exécution »
 */
function creerFormulaire() {
  var form = FormApp.create('Ton avis sur la retraite « Retour à soi » 🌿');

  form.setDescription(
    'Merci d\'avoir partagé ce moment avec nous 🌿\n' +
    'Ton retour est précieux : il nous aide à faire grandir la retraite ' +
    'et à aider d\'autres personnes à oser venir.\n' +
    'Cela prend environ 5 minutes.'
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setConfirmationMessage(
    'Merci du fond du cœur pour ton retour 💛 Prends soin de toi.'
  );

  // 1. Prénom
  form.addTextItem()
    .setTitle('Ton prénom')
    .setHelpText('Facultatif')
    .setRequired(false);

  // 2. En 3 mots
  form.addTextItem()
    .setTitle('En 3 mots, comment décrirais-tu ta retraite ?')
    .setRequired(true);

  // 3. Avant / après + avis
  form.addParagraphTextItem()
    .setTitle('Comment te sentais-tu en arrivant, et comment te sens-tu en repartant ?')
    .setHelpText('Partage-nous ton avis sur la retraite.')
    .setRequired(true);

  // 4. Moment marquant
  form.addParagraphTextItem()
    .setTitle('Quel moment ou quelle activité t\'a le plus marquée ?')
    .setRequired(true);

  // 5. Ce qui a changé
  form.addParagraphTextItem()
    .setTitle('Qu\'est-ce que cette retraite a changé pour toi, même un petit peu ?')
    .setRequired(true);

  // 6. Améliorations
  form.addParagraphTextItem()
    .setTitle('Y a-t-il quelque chose que tu aurais aimé en plus ou différemment ?')
    .setHelpText('Facultatif')
    .setRequired(false);

  // 7. Message à une personne qui hésite
  form.addParagraphTextItem()
    .setTitle('Qu\'est-ce que tu dirais à une personne qui hésite à venir à la retraite ?')
    .setRequired(true);

  // 8. Recommandation
  form.addMultipleChoiceItem()
    .setTitle('Recommanderais-tu cette retraite à une amie ?')
    .setChoiceValues(['Oui, sans hésiter', 'Probablement', 'Je ne sais pas', 'Non'])
    .setRequired(true);

  // 9. Autorisation de partage
  form.addMultipleChoiceItem()
    .setTitle('J\'accepte que mon témoignage soit partagé')
    .setChoiceValues(['Oui, de façon anonyme', 'Non, il reste privé'])
    .setRequired(true);

  Logger.log('✅ Formulaire créé !');
  Logger.log('Lien à envoyer aux participantes : ' + form.getPublishedUrl());
  Logger.log('Lien pour modifier le formulaire : ' + form.getEditUrl());
}
