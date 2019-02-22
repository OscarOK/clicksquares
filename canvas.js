var canvas = document.querySelector('canvas');

// Not using CSS for some reason
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c as in Context
// Superobject, contains tons of stuff
var c = canvas.getContext('2d');

//c.fillRect(x,y,width,height) dibuja un rectangulo
c.fillStyle = "rgba(255,0,0,0.5)"
c.fillRect(25, 100, 50, 50);
c.fillStyle = "rgba(0,255,0,0.5)"
c.fillRect(100, 91, 50, 50);
c.fillStyle = "rgba(0,0,255,0.5)"
c.fillRect(138, 131, 50, 50);

// Rayitas
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400,300);
c.strokeStyle = "#fa34a3"; // estilito tipo css
c.stroke(); // pinta la cosa

// Arcs
c.beginPath(); // evita que se forme una linea desde nuestras anteriores
c.arc(300, 300, 30, 0, Math.PI / 2 , false);
c.stroke();

// usando unos tremendos fors
for(var i = 0; i < 800; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight; //cosas 0 < y < 1
    c.beginPath(); // evita que se forme una linea desde nuestras anteriores
    c.arc(x, y, 30, 0, Math.PI * 2 , false);
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    c.strokeStyle = "rgba(" + r + "," + g + "," + b +",1)" ;
    c.stroke();
}