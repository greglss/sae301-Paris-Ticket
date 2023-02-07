    let recherchebtn = document.querySelector('.recherchebtn')
    let croixbtn = document.querySelector('.croixbtn')
    let recherchebox = document.querySelector('.recherchebox')
    let nav = document.querySelector('.nav')
    let menuicon = document.querySelector('.menuicon')
    let header = document.querySelector('header')
    recherchebtn.onclick = function() {
    recherchebox.classList.add('active');
    croixbtn.classList.add('active');
    recherchebtn.classList.add('active')
    menuicon.classList.add('hide')
    header.classList.remove('open');
}
    croixbtn.onclick = function() {
    recherchebox.classList.remove('active');
    croixbtn.classList.remove('active');
    recherchebtn.classList.remove('active');
    menuicon.classList.remove('hide')
}
    menuicon.onclick = function() {
    header.classList.toggle('open');
    recherchebox.classList.remove('active');
    croixbtn.classList.remove('active');
    recherchebtn.classList.remove('active');
}
