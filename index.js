function fibonacci(n) {
   if (n <=1){
     return 1;
   }else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}
document.writeln('This is a fibonacci number (with recursive):'+' '+fibonacci(0)+'<br>');

var fib = [1, 1];
for(var i=fib.length; i<10; i++) {
    fib[i] = fib[i-2] + fib[i-1];
}

document.writeln('This is a fibonacci array:'+' '+fib);
