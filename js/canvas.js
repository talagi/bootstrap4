/*jshint esversion: 6*/
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

var szer = canvasElem.width, wys = canvasElem.height;

// kolor wypełnienia
ctx.fillStyle = "#0b51ba";
// rysujemy prostokąt/kwadraty
// x,y, width, height
ctx.fillRect(25, 25, 100, 100);

// kolor obrysu
ctx.fillStroke = "#15eec4";
// drugi obrys prostokąta
ctx.strokeRect(30, 30, 100, 100);

// czyszczemia obszaru
ctx.clearRect(45, 45, 60, 60);

// rysowanie linii
ctx.fillStroke = "pink";
ctx.moveTo(0, 0);
ctx.lineTo(szer, wys);
ctx.stroke();
ctx.moveTo(0, wys);
ctx.lineTo(szer, 0);
ctx.stroke();

// rysowanie koła
ctx.beginPath();
// x, y, radius, start, stop, true/false
ctx.arc(szer / 2, wys / 2, 100, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(szer / 2, wys / 2, 90, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(200, 100, 70, 0 , 2 * Math.PI);
ctx.stroke();

// TEKST
ctx.lineWidth = 1;
ctx.font = "normal 20px Arial";
ctx.textBaseline = "middle";
ctx.textAlign = "center";
ctx.strokeText('Grafika w canvas', 70, 180);
