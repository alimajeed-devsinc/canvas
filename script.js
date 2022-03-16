var image;
let fileInput = document.getElementById('file');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.fillStyle = "#FFFFFF";
context.fillRect(0, 0, canvas.width, canvas.height);

fileInput.addEventListener('change', function(ev) {
if(ev.target.files) {
    let file = ev.target.files[0];
    var reader  = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
        image = new Image();
        image.src = e.target.result;
        image.onload = function(ev) {
            var canvas = document.getElementById('canvas');
            var context = canvas.getContext('2d');
            context.drawImage(image,0,20,canvas.width,110);
        }
    }
}});

function addheader(){
    var headerText = document.getElementById("header").value;
    var c = document.getElementById("canvas");
    var context = c.getContext("2d");
    context.font = "15px Georgia";
    context.textAlign="center";
    context.backgroundColor="red";
    context.fillStyle = "black";
    context.fillText(headerText, 150,15 );
}

function addfooter(){
    var footerText = document.getElementById("footer").value;
    var c = document.getElementById("canvas");
    var context = c.getContext("2d");
    context.font = "15px Georgia";
    context.textAlign="center";
    context.fillStyle = "black";
    context.fillText(footerText, 150, 145);
}

function addcaption(){
    var captionText = document.getElementById("caption").value;
    var c = document.getElementById("canvas");
    var context = c.getContext("2d");
    context.font = "15px Georgia";
    context.textAlign="center";
    context.fillStyle = "black";
    context.fillText(captionText, 150, 70);
}

function download(){
    var canvas = document.getElementById("canvas");
    var image = canvas.toDataURL();
    var pnglink = document.createElement('a');
    pnglink.download = 'canvas_image.png';
    pnglink.href = image;
    pnglink.click();
    }

function reset(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image,0,20,canvas.width,110);
}
