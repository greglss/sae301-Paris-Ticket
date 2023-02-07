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
