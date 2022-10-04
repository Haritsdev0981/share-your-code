
buttons = document.querySelectorAll('button');
let out = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        
        out+=buttonText;
        
        
    })
}

    const btn1 = document.getElementById('btn-1');
    btn1.addEventListener('click', function onClick() {  
      btn1.style.height="110px";
      btn1.style.width="110px";  
      btn1.style.blur="100px";
    });
   
    const btn2 = document.getElementById('btn-2');
    btn2.addEventListener('click', function onClick() {  
      btn2.style.height="110px";
      btn2.style.width="110px";  
      btn2.style.blur="100px";
    });
    const btn3 = document.getElementById('btn-3');
    btn3.addEventListener('click', function onClick() {  
      btn3.style.height="110px";
      btn3.style.width="110px";  
      btn3.style.blur="100px";
    });
    const btn4 = document.getElementById('btn-4');
    btn4.addEventListener('click', function onClick() {  
      btn4.style.height="110px";
      btn4.style.width="110px";  
      btn4.style.blur="100px";
    });
    const btn6 = document.getElementById('btn-6');
    btn6.addEventListener('click', function onClick() {  
      btn6.style.height="110px";
      btn6.style.width="110px";  
      btn6.style.blur="100px";
    });
    const btn5 = document.getElementById('btn-5');
    btn5.addEventListener('click', function onClick() {  
      btn5.style.height="110px";
      btn5.style.width="110px";  
      btn5.style.blur="100px";
    });
    const btn7 = document.getElementById('btn-7');
    btn7.addEventListener('click', function onClick() {  
      btn7.style.height="110px";
      btn7.style.width="110px";  
      btn7.style.blur="100px";
    });
    const btn8 = document.getElementById('btn-8');
    btn8.addEventListener('click', function onClick() {  
      btn8.style.height="110px";
      btn8.style.width="110px";  
      btn8.style.blur="100px";
    });
    const btn9 = document.getElementById('btn-9');
    btn9.addEventListener('click', function onClick() {  
      btn9.style.height="110px";
      btn9.style.width="110px";  
      btn9.style.blur="100px";
    });    

 


function result(){
    if (out==="168" || out==="186"|| out==="681"|| out==="618"|| out==="816"|| out==="861")
    alert("You are a human !!!")
    else if (out==="")
    alert("Nothing selected!!!! SELECT in order to proceed")
    else
    alert("Wrong images selected!! try again")
}

