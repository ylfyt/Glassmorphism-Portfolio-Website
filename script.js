function getRandomColor() {
    var colors = [
        ["#ff9a9e", "#f6416c"],
        ["#9ef7f1", "#03eeff"],
        ["#fce5c7", "#f7a33b"],
        ["#ffc4fc", "#ff4af6"],
        ["#f8fab9", "#f9ff45"], // Yellow
    ];
    var idx = Math.floor(Math.random() * 5);
    var color = colors[idx];

    return color;
}

function setBackgroundColor() {
    var color = getRandomColor();
    document.getElementById("main").style.backgroundImage = "linear-gradient(135deg, " + color[0] + " 10%" + ", " + color[1] + " 100%" + ")";

    document.getElementById("circle1").style.background = color[1];
    document.getElementById("circle2").style.background = color[0];
}
