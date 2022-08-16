var menuicon = document.querySelector('svg');
menuicon.addEventListener('click',est);
function est(){
    document.body.classList.toggle('showmenu');
}
var navlinks = document.querySelectorAll('.navlink')
navlinks.forEach(des);

    
    function des(links){
        links.addEventListener('click',navshow);
        function navshow(){
        document.body.classList.remove('showmenu');
    };
};



