function add() {
    //Tomando el texto ingresado en el texarea
    var tweet = document.getElementById('comment').value;
    //Limpiando el textarea
    document.getElementById('comment').value = '';
    //Llamando contenedor html
    var container = document.getElementById('cont');
    //Creando el div que contiene el texto
    var comments = document.createElement('div');
    //Asignando el texto del textarea al nuevo div
    var textArea = document.createTextNode(tweet);

    //Si el contenedor está vacío deshabilitar el botón 
    if(tweet.length == 0 || tweet == null) {
        return document.getElementById('comment');
           
    }

    
    var contElement = document.createElement('p');
    contElement.appendChild(textArea);
    comments.appendChild(contElement);
    container.appendChild(comments);
}

//Contador de caracteres
var tweetText = document.getElementById('comment');
var counter = document.getElementById('count');


//Función para contar cada caracter en la longitud de la oración

tweetText.onkeydown = function () { 
    var numCount = counter.innerHTML = 140 - this.value.length;
    //Si el contador es menor a 0 desactivar el botón de twittear
    if (numCount < 0){
        document.getElementById('boton').disabled = true;

    //Si el contador es menor a 21 y mayor a 10 debe ponerse rojo
    } if (numCount < 21 && numCount > 10) {
        counter.classList.add('red');
    //Si el contador es menor a 11 y mayor a 0 debe ponerse amarillo
    } if (numCount < 11 && numCount > 0 ) {
        counter.classList.add('yellow');
    //Si el contador es menor a 0 se deben remover los colores
    } if (numCount < 0 ){
        counter.classList.remove('yellow');
        counter.classList.remove('red');
       
    }
};

var textarea = document.getElementById('comment');

textarea.oninput = function() {
  textarea.style.height = '';
  textarea.style.height = Math.min(textarea.scrollHeight, 200) + "px";
};