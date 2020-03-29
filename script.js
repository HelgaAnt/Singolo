
const MENU = document.getElementById('navbar');
const PFMENU = document.getElementById('portfolio-menu');
const PORTFOLIO_IMAGE = document.getElementById('portfolio_image');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');


MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});   

document.addEventListener('scroll', onScroll);

function onScroll(event){
    const curr = window.scrollY;
    //console.log(curr);
    const divs = document.querySelectorAll('main>div');
    const aref = document.querySelectorAll('#navbar a');

    divs.forEach((el) => {
        if (el.offsetTop <= curr && (el.offsetTop + el.offsetHeight) > curr) {
            aref.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    });
}

const PHONEV = document.getElementById('phonev');
const BLACKV = document.getElementById('blackphonev');
PHONEV.addEventListener('click', (event) => {
   let f = document.getElementById('blackphonev');
   if (f === null) {
    let div = document.createElement('div');
    div.className = "blackphonev";
    div.id = 'blackphonev';
    document.querySelector('#phone').append(div);
    const BLACKV = document.getElementById('blackphonev');
    document.getElementById('blackphonev').addEventListener('click', (event) => {
        document.getElementById('blackphonev').remove();
    });  
   }
   else {
    let div = document.getElementById('blackphonev');
    div.remove();
    }
});  

const PHONEH = document.getElementById('phoneh');
const BLACKH = document.getElementById('blackphonev');
PHONEH.addEventListener('click', (event) => {
   let f = document.getElementById('blackphoneh');
   if (f === null) {
    let div = document.createElement('div');
    div.className = "blackphoneh";
    div.id = 'blackphoneh';
    document.querySelector('#phone').append(div);
    const BLACKH = document.getElementById('blackphoneh');
    document.getElementById('blackphoneh').addEventListener('click', (event) => {
        document.getElementById('blackphoneh').remove();
    }); 
   }
   else {
    let div = document.getElementById('blackphoneh');
    div.remove();
    }
});  

PFMENU.addEventListener('click', (event) => {
    PFMENU.querySelectorAll('li').forEach(el => el.classList.remove('active2'));
    event.target.classList.add('active2');
    // изменение картинок    
    let arr = [];
    PORTFOLIO_IMAGE.querySelectorAll('div').forEach(el => {
        arr.push(el.cloneNode(true));
    });
    let FirstImg = arr[0];
    let newarr = arr.slice(1);
    let resarr = newarr.concat(FirstImg);
    PORTFOLIO_IMAGE.innerHTML = '';
   
    for (let i = 0; i < resarr.length; i++){
        PORTFOLIO_IMAGE.append(resarr[i]);
    }    
}); 

PORTFOLIO_IMAGE.addEventListener('click', event => {
    var curr = event.target;
    //alert (curr);
    if (curr.tagName == 'IMG') {
        //alert (curr.tagName);
        PORTFOLIO_IMAGE.querySelectorAll('img').forEach(item => {
            item.style.border = "none";
        });
        event.target.style.border = "5px solid #F06C64";
    }
});


const FORM = document.getElementById('form');

BUTTON.addEventListener('click', () => {
    const text_subject =  document.getElementById('subject').value.toString(); 
    const text_message =  document.getElementById('message').value.toString();
    if (text_subject == '')
        document.getElementById('text-subject').innerText = 'Без темы';   
    else
        document.getElementById('text-subject').innerText = 'Тема:' + text_subject;   
    
    if (text_message == '')    
        document.getElementById('text-message').innerText = 'Без описания';   
    else    
        document.getElementById('text-message').innerText = 'Описание:' + text_message;   
    document.getElementById('message-block').classList.remove('hidden');
});  

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('text-subject').innerText = '';   
    document.getElementById('text-message').innerText = '';  
    document.getElementById('message-block').classList.add('hidden');
    FORM.reset();
}); 

function isNotMax(event){
    event = event || window.event;
    var target = event.target || event.srcElement;
    var code=event.keyCode?event.keyCode:(event.which?event.which:event.charCode)
    switch (code){
        case 13:
        case 8:
        case 9:
        case 46:
        case 37:
        case 38:
        case 39:
        case 40:
        return true;
    }
    return target.value.length <= target.getAttribute('maxlength');
}




