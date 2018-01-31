function primegen(expectedprimes){
    var upperlimit = 200; //This will be incremented until we find our expected number of primes
    var primes = []; //Initially empty so we don't add 2 twice
    while (primes.length != expectedprimes){
        var tf = new Array();
            for(i = 2; i<=upperlimit; i++)
            if (i==2 || i%2 != 0) //Optimise by only adding odds
                tf.push(true);
            else
                tf.push(true);
            for (i = 2; i<=Math.sqrt(upperlimit); i++){
                if (tf[i]){
                    for (j = i*i; j <= upperlimit; j += i){
                        tf[j] = false;
                    }         
                primes.push(i);
                }
            if (primes.length == expectedprimes) //program breaks when the expected # of primes is found
                break;
            }
    }
    return primes;
}

var expectedprimes = 5;

var prime = primegen(expectedprimes);
console.log(prime);