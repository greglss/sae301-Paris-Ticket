document.getElementById('ajout').addEventListener('click',function() {
    let id = parseInt(document.getElementById('id').value);
    let titre = document.getElementById('titre').innerHTML;
    let affiche = document.getElementById('affiche').src;
    let lieu = document.getElementById('lieu').innerHTML;
    let date = document.getElementById('date').innerHTML;
    let quantite = parseInt(document.getElementById('qte').value);
    let tarif = parseInt(document.getElementById('tarif').innerHTML);

    let index = montab.findIndex(element => element.id === id); //trouver l'article dans la liste du panier
    if(index>-1){
        montab[index].quantite +=  parseInt(document.getElementById('qte').value);
        console.log(montab);
    }else{
        montab.push({
            'id': id,
            'titre': titre,
            'affiche': affiche.substring(affiche.indexOf("/i") + 1),
            'lieu': lieu,
            'date': date,
            'quantite': quantite,
            'tarif': tarif });
    }
    console.log(montab);
    let insertion = JSON.stringify(montab);
    document.cookie=`cart=${insertion}; path=/`;  // sauvegarde des infos dans le cookie "liste"

    document.getElementById('message').innerHTML = `${quantite} place(s) pour ${titre} ajoutée(s) au panier !`
})
