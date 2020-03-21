
const MENU = document.getElementById('menu');
const PFMENU = document.getElementById('portfolio-menu');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});   

PFMENU.addEventListener('click', (event) => {
    PFMENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
}); 

BUTTON.addEventListener('click', () => {
    const text_subject =  document.getElementById('subject').value.toString(); 
    const text_message =  document.getElementById('message').value.toString();
    //value.toString(); 
    //alert (subject); 
    if (text_subject == '')
        document.getElementById('text-subject').innerText = 'Без темы';   
    else
        document.getElementById('text-subject').innerText = 'Тема:' + text_subject;   
    
    if (text_message == '')    
        document.getElementById('text-message').innerText = 'Без описания';   
    else    
        document.getElementById('text-message').innerText = 'Описание:' + text_message;   
    //alert (document.getElementById('text-subject').innerText);
    //alert (document.getElementById('text-message').innerText);
    document.getElementById('message-block').classList.remove('hidden');
    //alert( document.getElementById('message-block').classList);
});  

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('text-subject').innerText = '';   
    document.getElementById('text-message').innerText = '';  
    //alert (document.getElementById('text-subject').innerText);
    //alert (document.getElementById('text-message').innerText);
    document.getElementById('message-block').classList.add('hidden');
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

portfolio_image.addEventListener('click', event => {
    var curr = event.target;
    //alert (curr);
    if (curr.tagName == 'IMG') {
        //alert (curr.tagName);
        portfolio_image.querySelectorAll('img').forEach(item => {
            item.style.border = "none";
        });
        event.target.style.border = "5px solid #F06C64";
    }
});


