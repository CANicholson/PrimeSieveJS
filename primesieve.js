function primegen(expectedprimes){
    var upperlimit = 100; //This will be incremented until we find our expected number of primes
    var primes = []; //Initially empty so we don't add 2 twice
    var lastnumber = 2;
    var past1stsegment = false;
    while (primes.length != expectedprimes){
            var tf = new Array();

            for(i = lastnumber; i<=upperlimit; i++){
            if (i == 2 || i%2 != 0) //Optimise by only adding odds
                tf[i] = true;
            else
                tf[i] = false;
            }
            if(past1stsegment){
                for (i = 0; i<=primes.length; i++){
                    for (j = primes[i]*primes[i]; j <= upperlimit; j += primes[i]){
                        tf[j] = false;
                    }     
                }
            }
            for (i = lastnumber; i<=upperlimit; i++){
                if (tf[i]){
                    for (j = i*i; j <= upperlimit; j += i){
                        tf[j] = false;
                    }     
                primes.push(i);
                }
            if (primes.length == expectedprimes) //program breaks when the expected # of primes is found
                return primes;
        }
        past1stsegment = true;
        lastnumber = tf.length -1;
        upperlimit += 100;
    }
}

var expectedprimes = 50;

var prime = primegen(expectedprimes);
console.log(prime);