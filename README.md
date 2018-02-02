PrimeSieveJS
 
 How to run: As this was implemented using Node.js you will need to have this installed. To run the file, navigate the directory the file is cloned to in your preffered command prompt (eg Powershell, Command prompt, Cmder etc.) Enter your selected amount of primes and it should be output as a table. Due to many command prompts not featuring horizontal scrolling I have also stored the results in a seperate file called results.txt, though this file is not properly formatted

 This was implemented using Node.js and npm, as I realised quite early on that a large amount of numbers would end up crashing any browser that tried to load a ~1000000 x ~1000000 table without using any sort of buffering. 

 Originally hoping to implement an incremental sieve of Eratosthenes, I quickly found that I had trouble understanding the exact algorithm for implementation. I then decided to implement a segemented sieve of Eratosthenes that would increment its upper boundary until the correct amount of primes had been found.

 I'm quite happy with the fact I can generate, parse into a table and store to a file a 34 x 34 prime matrix(the table size my laptop can handle before it begins wrapping) all within 0.8 seconds.

 In the future I'd like to try taking the time to implement the sieve via Elixir as being a functional language it is perfect for recurring through such large numbers. I'd like to try implementing a web page buffer for my JS code to try as well as using proper unit testing. I have attempted this in the past but have been unable to grasp the concept fully.


 Packages used
 https://nodejs.org/en/
 https://www.npmjs.com/package/cli-table