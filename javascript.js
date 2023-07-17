function clk(val){
    document.getElementById("screen").value = document.getElementById("screen").value + val;
}
function clrdisp(){
    document.getElementById("screen").value = ""
}
function equ(){
    var text = document.getElementById("screen").value;
    var result = eval(text);
    document.getElementById("screen").value = result;
}