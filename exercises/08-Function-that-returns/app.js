var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///

let dolarresult = dollarToEuro (137)
let yenresult = euroToYen(dolarresult)
console.log(yenresult)
