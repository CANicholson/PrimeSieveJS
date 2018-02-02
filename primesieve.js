var start;
function primegen(expectedprimes){
    start = new Date().getTime();
    var upperlimit = 10000; //This will be incremented until we find our expected number of primes
    var primes = []; //Initially empty so we don't add 2 twice
    var lastnumber = 2; //Since 0 and 1 are not pimes its easiest to start from 2, this will be used for updating segments
    //Between upperlimit and lastnumber we create the range of each segment
    var past1stsegment = false; //Used to figure out if we need to enter a new for loop which elminates non-primes from the next segment based on the primes already in our array
    var tf = new Array(); //holds booleans to track whether a number is a prime or not
    while (primes.length != expectedprimes){
            for(i = lastnumber; i<=upperlimit; i++){
            if (i == 2 || i%2 != 0) //Optimise by only making odds and 2 true to begin with
                tf[i] = true;
            else
                tf[i] = false;
            }
            if(past1stsegment){ //Eliminates non-primes from the current segment based on the primes we already have 
                for (i = 0; i<=primes.length; i++){
                    var targetIndex = ((Math.floor(lastnumber/primes[i])*primes[i])-lastnumber);
                    if(targetIndex < 0) targetIndex += primes[i];
                    for (j = targetIndex; j <= upperlimit; j += primes[i]){
                        tf[j] = false;
                    }     
                }
            }
            for (i = lastnumber; i<=upperlimit; i++){ //Sieve of eranthonses
                if (tf[i]){
                    for (j = i*i; j <= upperlimit; j += i){
                        tf[j] = false;
                    }     
                primes.push(i);
                }
            if (primes.length == expectedprimes) //program returns when the expected # of primes is found
                return primes;
        }
        past1stsegment = true;
        lastnumber = tf.length -1;
        upperlimit += 10000;
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
var expectedprimes;
rl.question('How many primes would you like? ', function (answer) {
    expectedprimes = answer;
    outside();
    rl.close();
});

outside = function(){
    var prime = primegen(parseInt(expectedprimes));
    var table = [];
    for(i = 0; i<= prime.length-1; i++){
        table[i] = [];
        table[i][0] = prime[i];
        table[0][i] = prime[i];
        for(j = 1; j<= prime.length-1; j++){
            table[i][j] = prime[i] * prime[j-1];
        }
    }
    console.log(table);
    var end = new Date().getTime();
    var totalTime = end - start;
    console.log(totalTime/1000 + " seconds");
}