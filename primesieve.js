function primegen(expectedprimes){
    var upperlimit = 100; //This will be incremented until we find our expected number of primes
    var primes = []; //Initially empty so we don't add 2 twice
    //while (primes.length != expectedprimes){
        var tf = new Array();
            for(i = 2; i<=upperlimit; i++)
            tf.push(true);
            for (i = 2; i<=Math.sqrt(upperlimit); i++){
                if (tf[i]){
                    for (j = i*i; j <= upperlimit; j += i){
                        tf[j] = false;
                    }         
                primes.push(i);
                }
            }
    //}
    return primes;
}

var expectedprimes = 5;

var prime = primegen(expectedprimes);
console.log(prime);