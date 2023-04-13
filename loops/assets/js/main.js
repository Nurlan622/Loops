var num=prompt("Ededi daxil edin");
var teklik = num % 10;
var eded=teklik;
while(num>9){
       num=(num-teklik) /10;
       teklik = num % 10;
       eded= eded+ teklik;
}
alert(eded)