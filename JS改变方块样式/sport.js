function set() {

    var setAllBtn = document.getElementById("setAllBtn");
    var block = document.getElementById("block");
    var containerOp = document.getElementById("containerOp");
    var red = document.getElementById("red");
    var yellow = document.getElementById("yellow");
    var blue = document.getElementById("blue");
    var twoWidth = document.getElementById("twoWidth");
    var threeWidth = document.getElementById("threeWidth");
    var fourWidth = document.getElementById("fourWidth");
    var twoHeight = document.getElementById("twoHeight");
    var threeHeight = document.getElementById("threeHeight");
    var fourHeight = document.getElementById("fourHeight");
    var recover = document.getElementById("recover");
    var confirm = document.getElementById("confirm");

    setAllBtn.onclick = function () {
        containerOp.style.display = "block";
    }
    recover.onclick = function () {
        block.style.cssText = "background:width;width:100px;height:100px;";
    }
    confirm.onclick = function () {
        containerOp.style.display = "none";
    }
    red.onclick = function () {
        block.style.background = "red";
    }
    yellow.onclick = function () {
        block.style.background = "yellow";

    }
    blue.onclick = function () {
        block.style.background = "blue";

    }
    twoWidth.onclick = function () {
        block.style.width = "200px";
    }
    threeWidth.onclick = function () {
        block.style.width = "300px";
    }
    fourWidth.onclick = function () {
        block.style.width = "400px";
    }
    twoHeight.onclick = function () {
        block.style.height = "200px";
    }
    threeHeight.onclick = function () {
        block.style.height = "300px";
    }
    fourHeight.onclick = function () {
        block.style.height = "400px";
    }



}

window.onload = function () {
    set();
}