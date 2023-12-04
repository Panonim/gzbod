// Funkcja ukrywająca ekran powitalny
function hideWelcomeScreen() {
  // Wyłącz możliwość przewijania strony
  document.body.style.overflow = 'hidden';

  // Pobierz element ekranu powitalnego
  var welcomeScreen = document.getElementById('hideWelcome');

  // Ustaw jego przezroczystość na 0, aby go schować
  welcomeScreen.style.opacity = 0;

  // Po pewnym czasie (500 milisekund), schowaj ekran powitalny
  setTimeout(function () {
      welcomeScreen.style.display = 'none';

      // Przywróć możliwość przewijania strony
      document.body.style.overflow = 'auto';
  }, 500);
}

// Funkcja pokazująca przyciski
function showButtons() {
  // Pobierz wszystkie przyciski z klasą 'linkbutton'
  var buttons = document.querySelectorAll('.linkbutton');

  // Dodaj klasę 'visible' do każdego przycisku
  buttons.forEach(function(button) {
      button.classList.add('visible');
  });
}

// Funkcja ukrywająca ekran powitalny i pokazująca przyciski
function hideWelcomeScreen() {
  // Przywróć możliwość przewijania strony
  document.body.style.overflow = 'auto';

  // Pobierz element ekranu powitalnego
  var welcomeScreen = document.getElementById('hideWelcome');

  // Ustaw jego przezroczystość na 0, aby go schować
  welcomeScreen.style.opacity = 0;

  // Po pewnym czasie (500 milisekund), schowaj ekran powitalny i pokaż przyciski
  setTimeout(function () {
      welcomeScreen.style.display = 'none';
      showButtons(); 
  }, 500);
}
