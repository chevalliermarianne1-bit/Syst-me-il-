/**
 * Crée le Google Form de pré-inscription à la retraite holistique « Retour à soi ».
 * 1. Va sur https://script.google.com > Nouveau projet
 * 2. Remplace tout le code par ce fichier, enregistre
 * 3. Clique sur « Exécuter » (fonction creerPreinscription) et autorise l'accès
 * 4. Les liens du formulaire s'affichent dans le « Journal d'exécution »
 */
function creerPreinscription() {
  var form = FormApp.create('Pré-inscription · Retraite holistique « Retour à soi » 🌱');

  form.setDescription(
    'Et si cet hiver, tu t\'offrais une pause rien que pour toi ? ❄️\n\n' +
    'L\'hiver nous invite naturellement à ralentir, à nous retirer un peu du monde ' +
    'pour revenir à l\'essentiel : nous-mêmes.\n\n' +
    'La retraite « Retour à soi », c\'est une parenthèse douce et enveloppante pour ' +
    'te reposer, te recentrer et écouter ce qui se passe à l\'intérieur. Un cocon ' +
    'chaleureux où tu peux déposer la fatigue, la course du quotidien et les attentes ' +
    'des autres, et simplement être.\n\n' +
    'Au programme : du repos, de la douceur, des temps d\'introspection et des moments ' +
    'pour prendre soin de ton corps comme de ton cœur 🕯️\n\n' +
    'Si tu ressens cet appel, nous t\'invitons à répondre à ce questionnaire avec ' +
    'sincérité. Le nombre de places est limité. Cette pré-inscription ne t\'engage à ' +
    'rien. Elle nous permet de vérifier que cette retraite correspond à tes besoins ' +
    'et à ce que tu souhaites vivre en ce moment.\n\n' +
    'Dans un délai de 24 à 48 heures, tu recevras un e-mail avec toutes les ' +
    'informations sur la retraite 🤍'
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setConfirmationMessage(
    'Merci pour ta confiance 🤍 Tes réponses resteront strictement confidentielles.\n\n' +
    'Nous avons hâte de te lire et, peut-être, de t\'accueillir dans ce cocon d\'hiver ' +
    'que nous préparons avec beaucoup de cœur, de soin et de douceur. Nous reviendrons ' +
    'vers toi d\'ici 24 à 48 heures.\n\n' +
    'Prends soin de toi d\'ici là ❄️\nElodie & Marianne'
  );

  // ───────── Section 1 : Dis-moi en un peu plus sur toi ─────────
  form.addSectionHeaderItem().setTitle('Dis-moi en un peu plus sur toi');

  form.addTextItem().setTitle('Nom').setRequired(true);
  form.addTextItem().setTitle('Prénom').setRequired(true);

  var email = form.addTextItem().setTitle('Adresse e-mail').setRequired(true);
  email.setValidation(
    FormApp.createTextValidation()
      .setHelpText('Merci d\'indiquer une adresse e-mail valide.')
      .requireTextIsEmail()
      .build()
  );

  form.addTextItem().setTitle('Numéro de téléphone').setRequired(true);
  form.addTextItem().setTitle('Âge').setRequired(false);
  form.addTextItem().setTitle('Lieu de résidence').setRequired(false);

  // ───────── Section 2 : Ton cheminement ─────────
  form.addSectionHeaderItem().setTitle('Ton cheminement');

  form.addParagraphTextItem()
    .setTitle('Qu\'est-ce qui t\'a donné envie de participer à cette retraite ?')
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Où en es-tu aujourd\'hui ?')
    .setHelpText('Plusieurs réponses possibles')
    .setChoiceValues([
      'Je me sens fatiguée, j\'ai besoin de recharger mes batteries',
      'Mon mental tourne en boucle, j\'ai du mal à me poser',
      'Je cours sans arrêt et je ne prends jamais de temps pour moi',
      'Je donne beaucoup aux autres et je m\'oublie un peu',
      'Je me sens déconnectée de moi-même',
      'Je ressens du stress ou de l\'anxiété',
      'Je traverse une période de transition ou de questionnement',
      'Je suis sensible, je ressens tout de manière intense',
      'Mon corps est tendu, lourd ou fatigué',
      'L\'hiver est une saison où je me sens plus basse, moins énergique',
      'Je me sens plutôt bien, mais j\'ai envie d\'un moment de douceur pour moi'
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('De quoi as-tu le plus besoin en ce moment ?')
    .setHelpText('Plusieurs réponses possibles')
    .setChoiceValues([
      'Me reposer vraiment, sans culpabiliser',
      'Ralentir et apaiser mon mental',
      'Me sentir enveloppée, en sécurité, dans un cocon',
      'Prendre du temps pour moi, rien que pour moi',
      'Me reconnecter à mon corps en douceur',
      'Faire le point, prendre du recul sur ma vie',
      'Accueillir et libérer mes émotions',
      'Retrouver de la clarté pour la nouvelle année',
      'Être plus douce et bienveillante envers moi-même'
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('As-tu déjà participé à une retraite ou à un week-end bien-être ?')
    .setChoiceValues(['Oui', 'Non'])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Qu\'as-tu déjà mis en place pour prendre soin de toi et te sentir mieux ?')
    .setHelpText('Tu peux nous partager les pratiques ou les outils que tu as déjà expérimentés ou qui t\'ont aidée.')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Y a-t-il quelque chose d\'important que tu aimerais nous partager avant cette retraite ?')
    .setRequired(false);

  // ───────── Section 3 : Ton engagement ─────────
  form.addSectionHeaderItem().setTitle('Ton engagement');

  form.addMultipleChoiceItem()
    .setTitle('Es-tu prête à t\'offrir un véritable temps pour toi durant ces 3 jours ?')
    .setChoiceValues([
      'Oui, pleinement',
      'Oui, mais cela me demande de sortir de ma zone de confort',
      'Je ne sais pas encore'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('As-tu des besoins particuliers dont nous devrions tenir compte ?')
    .setHelpText('Régime alimentaire, allergies, santé, mobilité…')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('Comment as-tu connu la retraite ?')
    .setChoiceValues(['Instagram', 'Facebook', 'Bouche-à-oreille', 'Site internet'])
    .showOtherOption(true)
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('Acceptes-tu de recevoir par e-mail toutes les informations complémentaires ?')
    .setChoiceValues([
      'J\'accepte de recevoir les e-mails',
      'Je n\'accepte pas et je renonce à ma candidature'
    ])
    .setRequired(true);

  Logger.log('✅ Formulaire créé !');
  Logger.log('Lien à partager : ' + form.getPublishedUrl());
  Logger.log('Lien pour modifier le formulaire : ' + form.getEditUrl());
}
