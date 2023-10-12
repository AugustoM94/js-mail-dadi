const mailList = [
    'boolean@boolean.it',
    'classe107@classe.it',
    'augusto@augusto.it',
    'marzo@marzo.it',
    'script@js.it',

];
//Inserimento Variabili//
const btnMail = document.querySelector('.btn-primary');
const btnReset = document.querySelector('.btn-danger')
const alert = document.querySelector('.alert')
//Inserimento function
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
    //allert
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

function lancio() {
    let num_pc1=Math.round(Math.random()*5+1);
    let num_pc2=Math.round(Math.random()*5+1);
          
    document.getElementById("numero_pc1").innerHTML ="Lancio computer " + num_pc1 + ", ";
    document.getElementById("numero_pc2").innerHTML =num_pc2;
    let totale_pc=num_pc1+num_pc2;
    document.getElementById("totale_pc").innerHTML =" , con un totale di " + totale_pc + " punti";
      
          
    let num_1=Math.round(Math.random()*5+1);
    let num_2=Math.round(Math.random()*5+1);
          
    document.getElementById("numero_1").innerHTML ="Tu hai ottenuto " + num_1 + ", ";
    document.getElementById("numero_2").innerHTML =num_2;
    let totale1=num_1+num_2;
    document.getElementById("totale1").innerHTML =" e hai totalizzato " + totale1 + " punti";
      
    if(totale1 == totale_pc) {
    document.getElementById("vinto").innerHTML = "pareggio";
    } else if (totale1 > totale_pc){
    document.getElementById("vinto").innerHTML = "hai vinto";
} else (totale1 < totale_pc)
      document.getElementById("vinto").innerHTML = "hai perso";
}