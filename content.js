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

var lockedMessagesContent = [];

function createLockButton() {
    if (document.getElementById('lockedMessages')) {
        return;
    }

    var lockButton = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    lockButton.id = 'lockedMessages';
    lockButton.setAttribute('width', '20');
    lockButton.setAttribute('height', '40');
    lockButton.setAttribute('fill', 'currentColor');
    lockButton.setAttribute('viewBox', '0 0 16 16');
    lockButton.setAttribute('style', 'display: flex');

    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('d', 'M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z');

    lockButton.appendChild(path);

    lockButton.addEventListener('click', function () {
        var contactsPassword = prompt('Digite a senha');

        if (contactsPassword === '123') {
            alert("boa")
            constructLockedContent(lockedMessagesContent)
        } else {
            alert('Entrada inválida. O redirecionamento foi cancelado.');
        }
    });
    parentElement2 = document.querySelectorAll('.x78zum5.x13a6bvl.x1ye3gou')[0];

    if (parentElement2) {
        parentElement2.appendChild(lockButton);
    }
}

function constructLockedContent(lockedBoxes){
    contactsBoxes = Array.from(document.querySelectorAll(".xuxw1ft")).slice(2).map(function(element){return element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;});
    
    if (lockedBoxes.length < 1){
        for (let index = 0; index < contactsBoxes.length; index++) {
            if (index < lockedBoxes.length){
                contactsBoxes[index].innerHTML = lockedBoxes[index].innerHTML;
            }else{
                contactsBoxes.remove();
            }
        }
    }else{
        for (let index = 0; index < contactsBoxes.length; index++) {
            if (index < lockedBoxes.length){
                contactsBoxes[index].innerHTML = lockedBoxes[index].innerHTML;
                console.log(contactsBoxes)
                console.log("DIV")
                console.log(contactsBoxes[index])
                console.log("DIV")
                console.log(lockedBoxes[index].innerHTML)
                console.log("DIV")
                console.log(lockedBoxes)
                console.log(index)
            }
        }
    }
}

var backButtonInterval = setInterval(function () {
    if (window.location.href.startsWith('https://www.instagram.com/direct/t/')) {
        createBackButton();
    }
}, 1000);

var lockButtonInterval = setInterval(function () {
    if (window.location.href.startsWith('https://www.instagram.com/direct/')) {
        createLockButton();
    }
}, 1000);

var lockMessagesInterval = setInterval(function () {
    if (window.location.href.startsWith('https://www.instagram.com/direct/')) {
        lockComplete = lockMessages();
        if (lockComplete){
            lockMessagesInterval = "";
            clearInterval();
        }
    }
}, 500);

function lockMessages() {
    var contactBoxes = document.querySelectorAll(".xuxw1ft");
    for (let index = 0; index < contactBoxes.length; index++) {
        if (contactBoxes[index].innerHTML == "Malcolm Gregory") {
            nomeDoContatoParaBloqueio = contactBoxes[index];
            boxContato = nomeDoContatoParaBloqueio.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

            // Store the content of the deleted element
            lockedMessagesContent.push(boxContato.innerHTML);
            boxContato.remove();
            return true;
        }
    }
    return false;
}
