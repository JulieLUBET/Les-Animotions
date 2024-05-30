const btnToggle = document.querySelector('.btn-toggle');

// Fonction pour activer ou désactiver le mode sombre
function toggleDarkMode() {
    const body = document.body;
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        btnToggle.innerHTML = "Dark Mode";
        localStorage.setItem('darkMode', 'false'); // Mode clair activé
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        btnToggle.innerHTML = "Light Mode";
        localStorage.setItem('darkMode', 'true'); // Mode sombre activé
    }
}

// Vérifier l'état du mode sombre lors du chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode === 'true') {
        document.body.classList.add('dark');
        btnToggle.innerHTML = "Light Mode";
    } else {
        document.body.classList.add('light');
        btnToggle.innerHTML = "Dark Mode";
    }
});

btnToggle.addEventListener('click', toggleDarkMode);



/* changer le mode en fonction de lheure */
/*function themeNuitJour() {
    const date = new Date()
    const hour = date.getHours()

    if (hour > 8 || hour < 20) {
        document.documentElement.style.setProperty('--ecriture','#333')
        document.documentElement.style.setProperty('--fond','#f1f1f1')
        document.documentElement.style.setProperty('--banniere','rgb(127, 127, 127)')
        document.documentElement.style.setProperty('--ecritureBanniere','#f1f1f1')
    } else {
        document.documentElement.style.setProperty('--ecriture','#f1f1f1')
        document.documentElement.style.setProperty('--fond','#333')
        document.documentElement.style.setProperty('--banniere','#222')
        document.documentElement.style.setProperty('--ecritureBanniere','#f1f1f1')
    }
}

themeNuitJour()*/
