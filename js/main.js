$(document).ready(function () {
  // Détecter la page courante et activer le lien de navigation correspondant
  const currentPage = window.location.pathname.split('/').pop();
  
  // Par défaut, activer la page d'accueil si on est sur la racine
  if (currentPage === '' || currentPage === '/' || currentPage === 'index.html') {
    $('#nav-accueil').addClass('active');
  } else if (currentPage === 'evenements.html') {
    $('#nav-evenements').addClass('active');
  } else if (currentPage === 'equipes.html') {
    $('#nav-equipes').addClass('active');
  } else if (currentPage === 'direction.html') {
    $('#nav-direction').addClass('active');
  } else if (currentPage === 'licence.html') {
    $('#nav-licence').addClass('active');
  } else if (currentPage === 'contact.html') {
    $('#nav-contact').addClass('active');
  }
  
  // Mettre à jour le titre de la page
  const activeSection = $('nav a.active').text();
  if (activeSection) {
    const pageTitle = activeSection + ' - HBC Arcueillais';
    $('title').text(pageTitle);
  }

  // Gestion du formulaire de contact
  $("#contactForm").submit(function (e) {
    e.preventDefault();

    const nom = $("#nom").val();
    const prenom = $("#prenom").val();
    const sujet = $("#sujet").val();
    const message = $("#message").val();

    const body = `${nom} ${prenom}\n\n${message}`;

    const modal = `
      <div class="email-modal">
        <div class="modal-content">
          <h3>Choisissez votre client mail</h3>
          <div class="mail-options-grid">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=oukaci.tarik@gmail.com&su=${encodeURIComponent(sujet)}&body=${encodeURIComponent(body)}" target="_blank" class="mail-option">
              <i class="fab fa-google"></i>
              Gmail
            </a>
            <a href="https://outlook.live.com/mail/0/deeplink/compose?to=oukaci.tarik@gmail.com&subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(body)}" target="_blank" class="mail-option">
              <i class="fab fa-microsoft"></i>
              Outlook
            </a>
            <a href="https://compose.mail.yahoo.com/?to=oukaci.tarik@gmail.com&subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(body)}" target="_blank" class="mail-option">
              <i class="fab fa-yahoo"></i>
              Yahoo
            </a>
            <a href="mailto:oukaci.tarik@gmail.com?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(body)}" class="mail-option">
              <i class="fas fa-at"></i>
              Client par défaut
            </a>
          </div>
          <button class="close-modal">
            <i class="fas fa-times">X</i>
          </button>
        </div>
      </div>`;

    $("body").append(modal);

    $(".close-modal").click(function () {
      $(".email-modal").remove();
    });
  });
});
