var a = parseInt(prompt("Canh a"));
var b = parseInt(prompt("Canh b"));
var c = parseInt(prompt("Canh c"));
if (a + b > c && b + c > a && c + a > b ){
    console.log("La tam giac");
}else{
    console.log("Khong phai tam giac");
}
