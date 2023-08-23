function clk(val){
    if(document.getElementById("screenInput").value == 0)
    {
        document.getElementById("screenInput").value = val
    }else{
        document.getElementById("screenInput").value = document.getElementById("screenInput").value + val;
    }
}
function clrdisp(){
    document.getElementById("screenInput").value = "0"
}
function equ(){
    var text = document.getElementById("screenInput").value;
    var result = eval(text);
    document.getElementById("screenInput").value = result;
}