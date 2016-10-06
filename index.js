function fibonacci(n) {
   if (n <=1){
     return 1;
   }else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}

console.log(fibonacci(0))

var fib = [1, 1];
for(var i=fib.length; i<10; i++) {
    fib[i] = fib[i-2] + fib[i-1];
}

console.log(fib)
