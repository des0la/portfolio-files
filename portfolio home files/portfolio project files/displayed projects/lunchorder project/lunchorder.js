var lunchorderdtails = document.getElementById('lunchorderdetails');
lunchorderdtails.addEventListener('submit',formsubmit);

function formsubmit(event){
    event.preventDefault();
    var pupname = event.target.elements['childname'].value;
    var pupgrade = event.target.elements['childgrade'].value;
    var puporder = event.target.elements['childorder'].value;
    var puporderphoto = event.target.elements['lunchphoto'].value;

    for( var i = 0; i < lunchorderdtails.length; i++){
        lunchorderdtails.elements[i].value = '';
    }

    var finallunchorder = lunchorderoutput(pupname, pupgrade, puporder, puporderphoto);
    
    var lunchcontainer = document.getElementById('ordercontainer');
    if(lunchcontainer.children.length === 0){
        document.getElementById('title').innerHTML = 'Lunch Order';
    }

    document.querySelector('#ordercontainer').appendChild(finallunchorder);
};
function lunchorderoutput(name, grade, order, photoURL){
    var ordercontainer = document.createElement('div')
    ordercontainer.className = 'orderdetails';

    var img = document.createElement('img')
    img.setAttribute('alt',name);
    var photosrc = "pix/images.png"
        if(photoURL.length === 0){
            img.setAttribute('src', photosrc);
        }
        else{
            img.setAttribute('src', photoURL);
        }
        ordercontainer.appendChild(img);

    var info = document.createElement('div');
    info.className = 'orderinfo';

    var pupilname = document.createElement('h3');
  
    pupilname.innerText = name;
    info.appendChild(pupilname);

    var pupilgrade = document.createElement('h4');
    
    pupilgrade.innerText = grade;
    info.appendChild(pupilgrade);

    var pupilorder = document.createElement('h5');
  
    pupilorder.innerText = order;
    info.appendChild(pupilorder);

    var orderdelete = document.createElement('button');
    orderdelete.innerText = 'Remove';

    orderdelete.addEventListener('click',remove);
    info.appendChild(orderdelete)

    ordercontainer.appendChild(info);

    return ordercontainer;
    };

    function remove(event){
        var ordercontainer = event.target.parentElement.parentElement;
        ordercontainer.remove();
    }


