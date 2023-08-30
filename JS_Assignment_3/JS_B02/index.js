var $ = function(id) {
    return document.getElementById(id);
};
var calculateNM = function(n, m) {
    var result = "";
    var sum = 0;

    for(var i = n; i <= m ; i++){
        sum = sum + i;
        result = result + "+" + i;
    }
    result += "=" + sum;
    return result;
};


var processEntries = function(){
    var so_n = parseInt($("so_n").value);
    var so_m = parseInt($("so_m").value);
    var ket_qua = parseInt($("ket_qua").value);

    $("ket_qua").value = calculateNM(so_n, so_m, ket_qua);

}
window.onload = function(){
    $("calculate").onclick = processEntries;
}

