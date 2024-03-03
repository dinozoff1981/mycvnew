function changeBackgroundColor() {
   
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    
    document.body.style.backgroundColor = randomColor;
}


document.addEventListener('click', changeBackgroundColor);



 var keysPressed = [];

 
 function showPopup() {
     alert("You typed 1337!");
     
     keysPressed = [];
 }

 
 document.addEventListener('keydown', function(event) {
    
     keysPressed.push(event.key);

     
     if (keysPressed.slice(-4).join('') === '1337') {
         showPopup(); 
     }
 });