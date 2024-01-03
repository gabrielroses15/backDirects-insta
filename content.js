function createBackButton() {
    // Verificar se o botão já existe
    if (document.getElementById('backToDirectButton')) {
        return; // Se o botão já existir, não faz nada
    }

    var backButton = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    backButton.id = 'backToDirectButton';
    backButton.setAttribute('width', '20');
    backButton.setAttribute('height', '20');
    backButton.setAttribute('fill', 'currentColor');
    backButton.setAttribute('viewBox', '0 0 16 16');
    backButton.classList.add('bi', 'bi-arrow-left');
  
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('d', 'M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z');
  
    backButton.appendChild(path);
  
    backButton.style.padding = '10px';
    backButton.style.border = 'none';
    backButton.style.borderRadius = '5px';
    backButton.style.backgroundColor = 'black';
    backButton.style.cursor = 'pointer';
  

    backButton.addEventListener('click', function () {
        window.location.href = 'https://www.instagram.com/direct/';
    });
    var parentElement = document.querySelectorAll('.x78zum5.x13a6bvl.x1ye3gou')[1];
  
    if (parentElement) {
        parentElement.appendChild(backButton);
    }
}
  
var interval = setInterval(function() {
    if (window.location.href.startsWith('https://www.instagram.com/direct/t/')) {
        createBackButton();
    }
}, 1000);

function checkDirectPage() {
    if (window.location.href.startsWith('https://www.instagram.com/direct/t/')) {
        createBackButton();
    }
}

checkDirectPage();