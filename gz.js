function hideWelcomeScreen() {
    document.body.style.overflow = 'hidden';
    var welcomeScreen = document.getElementById('hideWelcome');
    welcomeScreen.style.opacity = 0;

    setTimeout(function () {
        welcomeScreen.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 500);
}
function showButtons() {
    var buttons = document.querySelectorAll('.linkbutton');
    buttons.forEach(function(button) {
      button.classList.add('visible');
    });
  }
  

  function hideWelcomeScreen() {
    document.body.style.overflow = 'auto';
    var welcomeScreen = document.getElementById('hideWelcome');
    welcomeScreen.style.opacity = 0;
  
    setTimeout(function () {
      welcomeScreen.style.display = 'none';
      showButtons(); 
    }, 500);
  }
  function swayfyMarketing() {
    window.location.href = 'https://discord.gg/bJcHWru8kZ';
  }