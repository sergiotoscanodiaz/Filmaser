window.onload = function () {
    var canvas = document.getElementById("boton");
    var ctx = canvas.getContext("2d");
    ctx.font ="20pt Verdana";
    ctx.lineWidth ="3";
    ctx.strokeStyle ="#369";
    ctx.fillStyle ="#48A";
    ctx.strokeText("FILMASER-APP", 3, 70);

    canvas.addEventListener('click', function () {
        window.location.href = "https://filmaser-app.web.app/home"
    })
}

