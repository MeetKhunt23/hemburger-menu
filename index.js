var main_menu=document.querySelector('.menu');
var open_menu=document.querySelector('.openham');
var close_menu=document.querySelector('.closeham')



open_menu.addEventListener('click',show)

function show(){
    main_menu.style.display='block';
    open_menu.style.display='none'
    close_menu.style.display='block'
}

close_menu.addEventListener('click',close)

function close(){
    main_menu.style.display='none';
    open_menu.style.display='block'
    close_menu.style.display='none'
}