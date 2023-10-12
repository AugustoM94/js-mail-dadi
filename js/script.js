const mailList = [
    'boolean@boolean.it',
    'classe107@classe.it',
    'augusto@augusto.it',
    'marzo@marzo.it',
    'script@js.it',

];

const btnMail = document.querySelector('.btn-primary');
const btnReset = document.querySelector('.btn-danger')
const alert = document.querySelector('.alert')
btnMail.addEventListener('click', function () {
    alert.className = 'alert d-none';
    let mailInput = document.getElementById('nome').value;
    let trovMail = false;
    console.log(mailInput)
    for (let i = 0; i < mailList.length; i++) {
        let currentMail = mailList[i];
        if (currentMail.toLocaleLowerCase() === mailInput.toLocaleLowerCase()) {
            trovMail = true;
        }
    }
    let text, allert;
    if (trovMail) {
        allert = 'alert-success';
        text = 'Presente';
    } else {
        allert = 'alert-danger'
        text = 'Assente'
    }
    alert.innerText = text;
    alert.classList.add(allert);
    alert.classList.remove('d-none');

   
})
btnReset.addEventListener('click',
function () {
    const mailInput = document.getElementById('nome').value = '';
    mailInput.classList.add('d-none');
    
})