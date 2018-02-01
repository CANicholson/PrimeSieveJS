function primegen(expectedprimes){
    var upperlimit = 10000; //This will be incremented until we find our expected number of primes
    var primes = []; //Initially empty so we don't add 2 twice
    var lastnumber = 2
    var tf = new Array();
    while (primes.length != expectedprimes){
            for(i = lastnumber; i<=upperlimit; i++){
            if (i == 2 || i%2 != 0) //Optimise by only adding odds
                tf[i] = true;
            else
                tf[i] = false;
            }
            for (i = lastnumber; i<=Math.sqrt(upperlimit); i++){
                if (tf[i]){
                    for (j = i*i; j <= upperlimit; j += i){
                        tf[j] = false;
                    }         
                primes.push(i);
                }
            if (primes.length == expectedprimes) //program breaks when the expected # of primes is found
                break;
            }
        lastnumber = Math.sqrt(tf.length-1);
        upperlimit += 100 
    }
    return primes;
}

var expectedprimes = 26;

var prime = primegen(expectedprimes);
console.log(prime);