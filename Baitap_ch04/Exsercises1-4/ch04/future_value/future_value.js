var $ = function(id) {
    return document.getElementById(id);
};
var calculateFV = function(amount, rate, year){
    var result = amount;

    for(var i = 0; i < year; i++){
        result += result * rate / 100;
    }
    return result.toFixed(2);
}

var clearEntries = function(){
    //clear all input
    $("investment").value = "";
    $("annual_rate").value = "";
    $("years").value = "";

    //reset error
    $("investment").firstChild.nodeValue = "*";
    $("annual_rate").firstChild.nodeValue = "*";
    $("years").firstChild.nodeValue = "*";
} 
var processEntries = function(){
    var invest_amount = parseFloat($("investment").value);
    var annual_rate = parseFloat($("annual_rate").value);
    var years = parseFloat($("years").value);

    $("future_value").value = calculateFV(invest_amount, annual_rate, years);
// investment
    if (isNaN(investment)) {
        $("investment_error").firstChild.nodeValue = "futures must be numeric";
      } else if (investment <= 0) {
        $("investment_error").firstChild.nodeValue =
          "futures must be greater than zero";
      } else {
        $("investment_error").firstChild.nodeValue = "*";
      }
//annual_rate
      if (isNaN(annual_rate)) {
        $("rate_error").firstChild.nodeValue = "annual_rate must be numeric";
      } else if (annual_rate <= 0) {
        $("rate_error").firstChild.nodeValue =
          "annual_rate must be greater than zero";
      } else {
        $("rate_error").firstChild.nodeValue = "*";
      }
//years
      if (isNaN(years)) {
        $("years_error").firstChild.nodeValue = "years must be numeric";
      } else if (years <= 0) {
        $("years_error").firstChild.nodeValue =
          "years must be greater than zero";
      } else {
        $("years_error").firstChild.nodeValue = "*";
      }

      if (isNaN(investment) || isNaN(annual_rate) || isNaN(years) || investment <= 0 || annual_rate <= 0 || years <= 0 ) {
        $("future_value").value = calculateFV(invest_amount, annual_rate, years);

      }
    };

window.onload = function(){
    $("calculate").onclick = processEntries;
    $("clearEntries").onclick = clearEntries;
    $("investment").focus();
}

