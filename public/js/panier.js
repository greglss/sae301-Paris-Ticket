function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if(name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

let liste = getCookie("cart");
if (liste !== null){
    montab = JSON.parse(liste);
}else{
    document.cookie="cart=[]; path=/";
    montab =Array();
}
console.log(montab);
console.log(liste);

document.getElementById('liste').value=JSON.stringify(montab);

var totalgeneral=0
montab.forEach(uneinfo => {

    let html = `
<div class="cardlist">
    <div class="card">
            <img src="../${(uneinfo.affiche)}" alt="affiche de ${uneinfo.titre}">
        <div class="textcard">
            <span class="titremanif">${uneinfo.titre}</span>
            <span class="lieuspan">${uneinfo.lieu}</span>
            <span class="datemanif">${uneinfo.date}</span>
        </div>
        <div class="cartbtn">
            <span id="${uneinfo.id}" class="prixmanif">Nombre de place : <button class="moins">-</button><span>${uneinfo.quantite}</span><button class="plus">+</button></span>
            <span class="prixmanif">tarif : <span class="unitaire">${uneinfo.tarif}</span>€</span>
            <span class="prixmanif">Total : <span class="tarif">${uneinfo.tarif * uneinfo.quantite}</span>€</span>
        </div>
    </div>
</div>`
    document.getElementById('zone').innerHTML += html
    totalgeneral += uneinfo.tarif * uneinfo.quantite
    console.log(totalgeneral)
    document.querySelector('.total').innerHTML=totalgeneral;
    document.querySelector('.total2').innerHTML=totalgeneral;


})
document.querySelectorAll('.plus').forEach(clickplus)
document.querySelectorAll('.moins').forEach(clickmoins)

function clickplus(tag){
    tag.addEventListener('click',function() {
        qte=this.parentNode.querySelector('span').innerHTML;
        console.log(qte)
        qte++;
        this.parentNode.querySelector('span').innerHTML=qte;
        tarif=this.parentNode.parentNode.querySelector('.unitaire').innerHTML;
        console.log(tarif)
        total= tarif*qte;
        console.log(total)
        this.parentNode.parentNode.querySelector('.tarif').innerHTML=total;

        let id = this.parentNode.id; // recupere l'id de l'article cliqué
        console.log(id)
        let index = montab.findIndex(element => element.id === id); //trouver l'article dans la liste du panier
        console.log(index)
        montab[index].quantite	= parseInt(montab[index].quantite) +1; //incrementer la quantité
        let insertion = JSON.stringify(montab);
        console.log(insertion)
        document.cookie=`cart=${insertion}; path=/`;  // sauvegarde des infos dans le cookie "liste"
        document.getElementById('liste').value=JSON.stringify(montab); // sauver montab pour le formulaire

        totalgeneral += parseInt(tarif);
        document.querySelector('.total').innerHTML=totalgeneral;
        document.querySelector('.total2').innerHTML=totalgeneral;
    })
}

function clickmoins(tag){
    tag.addEventListener('click',function() {
        qte=this.parentNode.querySelector('span').innerHTML;
        console.log(qte)
        if(qte>0){
            qte--;
            this.parentNode.querySelector('span').innerHTML=qte;
            tarif=this.parentNode.parentNode.querySelector('.unitaire').innerHTML;
            console.log(tarif)
            total= tarif*qte;
            console.log(total)
            this.parentNode.parentNode.querySelector('.tarif').innerHTML=total;

            let id = this.parentNode.id; // recupere l'id de l'article cliqué
            console.log(id)
            let index = montab.findIndex(element => element.id === id); //trouver l'article dans la liste du panier
            console.log(index)
            montab[index].quantite= parseInt(montab[index].quantite) -1; //incrementer la quantité
            let insertion = JSON.stringify(montab);
            console.log(insertion)
            document.cookie=`cart=${insertion}; path=/`;  // sauvegarde des infos dans le cookie "liste"
            document.getElementById('liste').value=JSON.stringify(montab); // sauver montab pour le formulaire

            totalgeneral -= parseInt(tarif);
            document.querySelector('.total').innerHTML=totalgeneral;
            document.querySelector('.total2').innerHTML=totalgeneral;
        }
    })
}
